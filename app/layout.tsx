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

// SEO e Metadados Globais Refeitos
export const metadata: Metadata = {
  metadataBase: new URL("https://photolove.com.br"), // Altere para o seu domínio final se necessário
  title: {
    default: "Photo Love | Plataforma para Ensaios Fotográficos",
    template: "%s | Photo Love",
  },
  description: "Organize ensaios, compartilhe fotos de forma privada e facilite a aprovação e download para seus clientes com a Photo Love.",
  keywords: [
    "fotografia", 
    "ensaios fotográficos", 
    "entrega de fotos", 
    "fotógrafos", 
    "aprovação de fotos", 
    "plataforma para fotógrafos", 
    "photo love"
  ],
  authors: [{ name: "Photo Love" }],
  creator: "Photo Love",
  publisher: "Photo Love",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Configuração correta e segura do Favicon para evitar distorções
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Photo Love | Plataforma para Ensaios Fotográficos",
    description: "Organize ensaios e compartilhe fotos de forma prática e segura com seus clientes.",
    url: "https://photolove.com.br",
    siteName: "Photo Love",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo2.png", // Ajuste para a imagem de share principal se tiver
        width: 1200,
        height: 630,
        alt: "Photo Love - Plataforma para Ensaios Fotográficos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Love | Plataforma para Ensaios Fotográficos",
    description: "Organize ensaios e compartilhe fotos de forma prática e segura com seus clientes.",
    images: ["/images/logo2.png"],
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