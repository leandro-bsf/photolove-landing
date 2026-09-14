import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TermosContent from "../components/TermosContent";

// Configuração de SEO específica para a página de Termos
export const metadata: Metadata = {
  title: "Termos e Condições de Uso",
  description: "Consulte os termos e condições de uso da plataforma Photo Love para fotógrafos e clientes.",
  keywords: ["termos de uso", "condições", "photo love", "regras da plataforma"],
  openGraph: {
    title: "Termos e Condições de Uso | Photo Love",
    description: "Consulte os termos e condições de uso da plataforma Photo Love.",
    url: "https://photolove.com.br/termos",
  },
};

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32 px-5 md:px-8">
        <TermosContent />
      </main>
      <Footer />
    </div>
  );
}