import { FC } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const ITEMS = [
  {
    label: "E-mail",
    href: "mailto:eddjpog@gmail.com",
    icon: "skill-icons:gmail-light",
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/edermuniz404",
    icon: "skill-icons:linkedin",
  },
  {
    label: "Github",
    href: "https://github.com/Edd404",
    icon: "skill-icons:github-light",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/edereumesmo",
    icon: "skill-icons:instagram",
  },
  {
    label: "Source code",
    href: "https://github.com/Edd404/Site-Portifolio-Estilo-Windows98",
    icon: "logos:opensource",
  },
];

export const StartMenu: FC = () => {
  return (
    <div className="absolute bottom-10 left-0 flex h-[250px] w-52 border-2 border-[#7c7c7c] border-l-white border-t-white bg-silver">
      <div className="w-[26px] bg-accent">
        <p className="translate-y-[210px] -rotate-90 text-lg font-bold text-white">
          Eder<span className="ml-1.5">Muniz</span>
        </p>
      </div>

      <div className="flex w-full flex-col justify-between text-sm">
        {ITEMS.map((item) => (
          <StartMenuItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

const StartMenuItem: FC<{ label: string; href: string; icon: string }> = ({
  label,
  href,
  icon,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-2 px-2.5 py-2 hover:bg-accent hover:text-white"
    >
      <Icon icon={icon} className="h-8 w-8" />
      {label}
    </Link>
  );
};
