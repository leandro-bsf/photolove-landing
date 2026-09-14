import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacidadeContent from "../components/PrivacidadeContent";

// Configuração de SEO específica para a página de Privacidade
export const metadata: Metadata = {
  title: "Política de Privacidade e LGPD",
  description: "Conheça a política de privacidade e proteção de dados da Photo Love em conformidade com a LGPD.",
  keywords: ["política de privacidade", "lgpd", "proteção de dados", "photo love", "segurança de dados"],
  openGraph: {
    title: "Política de Privacidade e LGPD | Photo Love",
    description: "Conheça a política de privacidade e proteção de dados da Photo Love.",
    url: "https://photolove.com.br/privacidade",
  },
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32 px-5 md:px-8">
        <PrivacidadeContent />
      </main>
      <Footer />
    </div>
  );
}