import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ModeProvider } from "@/lib/mode";

const display = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Só pro nome gigante: fonte variável (peso) pra ladeira líquida
const flex = Roboto_Flex({
  variable: "--font-flex",
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth", "opsz"],
  display: "swap",
});

// BDO Grotesk (OFL-1.1) — github.com/LCTipografi/BDO-Grotesk
const body = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "./fonts/BDOGrotesk-Regular.woff2", weight: "400" },
    { path: "./fonts/BDOGrotesk-Medium.woff2", weight: "500" },
    { path: "./fonts/BDOGrotesk-DemiBold.woff2", weight: "600" },
  ],
});

export const metadata: Metadata = {
  title: "lucas.a.baldi — Marketing, Design & Estratégia com IA",
  description:
    "De Osasco para o Brasil. 10 anos conectando marcas a resultados — portfólio profissional e pessoal de Lucas A. Baldi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} ${flex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
