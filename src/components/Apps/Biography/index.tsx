import { FC } from "react";
import { Icon } from "@iconify/react";
import "./estilofoto.css";
import Image from "next/image";

export const Biography: FC = () => {
  return (
    <div className="overflow-auto">
      <div className="mx-auto w-full max-w-3xl p-6">
        
        {/* Seção da foto e nome */}
        <div className="flex items-center gap-4">
          <div className="crt-frame">
            <Image
              src="/perfil.jpeg"
              alt="Eder Muniz"
              width={320}   // ou o valor correspondente
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Eder Muniz</h2>
            <p className="pt-1 text-base text-slate-600">Desenvolvedor e Programador</p>
          </div>
        </div>

        {/* Ícones de tecnologias */}
        <div className="flex flex-wrap gap-3 pt-4">
          <Icon icon="devicon:html5" className="h-10 w-10" />
          <Icon icon="devicon:css3" className="h-10 w-10" />
          <Icon icon="devicon:javascript" className="h-10 w-10" />
          <Icon icon="devicon:python" className="h-10 w-10" />
          <Icon icon="devicon:java" className="h-10 w-10" />
          <Icon icon="devicon:typescript" className="h-10 w-10" />
          <Icon icon="devicon:dart" className="h-10 w-10" />
          <Icon icon="logos:react" className="h-10 w-10" />
          <Icon icon="devicon:nextjs" className="h-10 w-10" />
          <Icon icon="devicon:flutter" className="h-10 w-10" />
          <Icon icon="devicon:git" className="h-10 w-10" />
          
        </div>

        {/* Sobre Mim */}
        <div className="pt-8">
          <h3 className="text-xl font-bold">Sobre Mim</h3>
          <p className="pt-3">Em processo de mudança de carreira. Atualmente estudante de Análise e Desenvolvimento
            de Sistemas, em conjunto, me aperfeiçoando em algumas linguagens cujo muito me intereça, como Java e Python. Anteriormente,
            me graduando em publicidade.
          </p>
        </div>

        {/* Web Developer */}
        <div className="pt-8">
          <h3 className="text-xl font-bold">Programador&Desenvolvedor</h3>
          <p className="pt-3">
            Busco sempre soluções práticas para problemas reais, fui responsável em programar e desenvolver diversas aplicações
            para uma nova empresa de Telemarketing cujo estou estagiando, como controle de funcionários, uniformes e estoque. Tenho grande interesse
            em toda a estrutura de Back-end, sempre com o foco em soluções lógicas e práticas.
          </p>
        </div>

        {/* Résumé */}
        <div className="pt-8">
          <h3 className="text-xl font-bold">Currículo </h3>
          <p className="pt-3">
            <a target="_blank" href="/documents/curriculo.pdf" className="text-accent underline">
              Clique aqui para abrir o currículo em pdf 👉.
            </a>
          </p>
        </div>
        
      </div>
    </div>
  );
};
