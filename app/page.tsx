import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Photo Love | Plataforma para Ensaios Fotográficos",
  description: "Organize ensaios, compartilhe fotos de forma privada e facilite a aprovação e download para seus clientes com a Photo Love.",
  keywords: ["fotografia", "ensaios fotográficos", "entrega de fotos", "fotógrafos", "photo love"],
  openGraph: {
    title: "Photo Love | Plataforma para Ensaios Fotográficos",
    description: "Organize ensaios e compartilhe fotos de forma prática e segura com seus clientes.",
    url: "https://photolove.com.br",
    siteName: "Photo Love",
    type: "website",
  },
};


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Pricing />
        <Testimonials />
        < FAQ />
        < FinalCTA />
     
      </main>
      <Footer />

    </>
  );
}