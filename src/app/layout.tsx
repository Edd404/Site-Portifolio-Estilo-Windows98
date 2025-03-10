import "@/app/globals.css";

import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const ms_sans_serif = localFont({
  src: [
    { path: "../fonts/ms_sans_serif.woff2", weight: "400", style: "normal" },
    {
      path: "../fonts/ms_sans_serif_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  author: "Eder Muniz",
  title: "Eder Muniz - Desenvolvedor",
  description:
    "Sou estudante de análise e desenvolvimento de sistemas. Entusiasta de tecnologia desde que consigo me lembrar, amante de cinema e joguinhos 2D",
    icons: {
      icon: "/chrome192.png",        // Ícone padrão
      shortcut: "/chrome192.png",    // Ícone para atalhos
      apple: "/chrome192.png",       // Ícone para dispositivos Apple
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ms_sans_serif.className}>
      <body className="overflow-hidden crt-effect">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
