"use server";

import { z } from "zod";
import { nanoid } from "nanoid";
import { headers } from "next/headers";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export type FormState = {
  message?: string;
  error?: {
    code: string;
    message?: string;
  };
};

const schema = z.object({
  from: z.string().email(),
  subject: z.string().max(128),
  message: z.string().max(4096),
});

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(1, "120s"),
  analytics: true,
});

export async function submitMail(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const rawData = Object.fromEntries(formData);

  const parsedData = schema.safeParse(rawData);

  if (parsedData.success === false) {
    return {
      error: {
        code: "invalid_data",
        message: "Formulário enviado inválido, preencha todos os campos obrigatórios.",
      },
    };
  }

  const ip = headers().get("x-forwarded-for") ?? "127.0.0.1";

  const { success } = await ratelimit.limit(ip);

  if (success === false) {
    return {
      error: {
        code: "ratelimit",
        message:
          "Aguarde 2 minutos antes de enviar outro e-mail. Desculpe pelo inconveniente.",
      },
    };
  }

  const now = new Date();

  const mail = {
    id: nanoid(),
    ...parsedData.data,
    date: now.toISOString(),
  };

  try {
    const pipeline = redis.pipeline();

    pipeline.zadd("mail", {
      score: now.getTime(),
      member: mail.id,
    });

    pipeline.hset(`mail:${mail.id}`, mail);

    await pipeline.exec();
  } catch (e) {
    return {
      error: {
        code: "internal_error",
      },
    };
  }

  return { message: "Seu e-mail foi enviado." };
}
