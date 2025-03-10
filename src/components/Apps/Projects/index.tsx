import Image from "next/image";
import { FC } from "react";

const PROJECTS = [
  {
    title: "Sistema de Estoque - Call Center",
    image: "/screenshots/estoque.webp",
    imageAlt: "Estoque Screenshot",
    href: "https://github.com/premkumar5012002/cloud-vault",
    description: [
      "Sistema de controle de estoque de um Call Center e seus diversos setores.",
      "Feito totalmente em Python, usando a biblioteca TkInter para a interface, e banco de dados local em JSON, possindo sistema de backup automático e log de movimentações.",
      "Foi disponibilizado na pasta compartilhada na rede da empresa, onde os setores utilizam ao mesmo tempo.",
    ],
  },
  {
    title: "Sistema de Estoque - Adega Poi Point",
    image: "/screenshots/adega1.webp",
    imageAlt: "Adega Screenshot",
    href: "https://github.com/premkumar5012002/quick-notes",
    description: [
      "Controle de estoque de uma dega do bairro.",
      "Totalmente feito em Python, biblioteca TkInter para interface e banco de dados local em JSON, possui tambem um sistema para foto dos produtos, onde envia uma cópia da imagem para uma pasta destino, evitando a exclusão da mesma de forma equivocada.",
      "Foi instalado na máquina do estabelecimento, o backup do banco de dados é feito localmente em um HD Separado.",
    ],
  },
  {
    title: "Controle de Funcionários para RH",
    image: "/screenshots/RH1.webp",
    imageAlt: "RH Screenshot",
    href: "https://github.com/premkumar5012002/discuss",
    description: [
      "Feito totalmente em Python, e utilizado a biblioteca CustomTKInter para um desing mais moderno. A idéia do programa é controlar o fluxo de entrada e saida de funcionário mediante as contratações feitas pelas terceirizadas parceiras, evitando assim custos adicionais para a empresa.",
      "O backup é feito localmente, em alguns arquivos JSON mediante ao assunto salvo. Possui funções de exportar relatório, backup automático periodacamente e restauradores de backup para evitar qualquer perda de dado",
      "Foi criado um servidor na empresa para alocar o programa, pois filiais de alguns estados usaram, e sendo aprovado após testes, escalonará para um banco de dados mais robusto.",
    ],
  },
  {
    title: "Controle de Vendas",
    image: "/screenshots/contador.webp",
    imageAlt: "Contador Screenshot",
    href: "https://github.com/premkumar5012002/draw-thing",
    description: [
      "Feito em HTML, CSS e Javascript",
      "É um contador de vendas que fica ativo nas TVs do Call Center, apenas para deixar visual o fluxo de vendas e metas do dia. O responsável pelos relatórios de vendas atualiza hora a hora. Possui um sistema de cronometro, onde a cada 1 minuto enche uma pequena barra circular em volta do contador, indicando assim que a hora passou e computa as vendas restantes para a meta",
      "O index fica no computador do resposável pelo controle de vendas e o mesmo espelha para as Tvs",
    ],
  },
];

export const Projects: FC = () => {
  return (
    <div className="overflow-auto">
      <div className="mx-auto flex max-w-4xl flex-col px-6 py-8">
        <h2 className="text-3xl font-bold">Projetos</h2>

        {PROJECTS.map((project, i) => (
          <div key={project.title}>
            <div className="my-8 border border-b-white border-t-[#808080]" />

            <div className="space-y-6">
              <h3 className="text-xl font-bold">
                {i + 1}. {project.title}
              </h3>

              <div>
                <a target="_blank" href={project.href}>
                  <Image
                    priority
                    width={project.title === "Costfocus" ? 400 : 950}
                    height={1280}
                    src={project.image}
                    className="mx-auto"
                    alt={project.imageAlt}
                  />
                </a>
              </div>

              <ul className="list-inside list-disc space-y-3 pl-1">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
