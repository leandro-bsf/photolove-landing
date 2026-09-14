import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuração de SEO Global
export const metadata: Metadata = {
  title: {
    default: "Photo Love | Plataforma para Envio e Aprovação de Ensaios Fotográficos",
    template: "%s | Photo Love",
  },
  description: "Facilite o fluxo de entrega, visualização, aprovação e download de ensaios fotográficos entre fotógrafos e clientes com a Photo Love.",
  keywords: ["fotografia", "ensaios fotográficos", "aprovação de fotos", "fotógrafos", "plataforma para fotógrafos", "download de fotos"],
  authors: [{ name: "Photo Love" }],
  creator: "Photo Love",
  publisher: "Photo Love",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://photolove.com.br"), // Substitua pelo seu domínio oficial quando subir para produção
  openGraph: {
    title: "Photo Love | Plataforma para Envio e Aprovação de Ensaios Fotográficos",
    description: "Facilite o fluxo de entrega, visualização, aprovação e download de ensaios fotográficos.",
    url: "https://photolove.com.br",
    siteName: "Photo Love",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}