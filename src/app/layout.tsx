import type { Metadata } from "next";
import { Montserrat, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/lib/mode";

const sans = Montserrat({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas A. Baldi — Marketing, Design & Estratégia",
  description:
    "10 anos conectando marcas a resultados. Portfólio pessoal e profissional de Lucas Baldi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
