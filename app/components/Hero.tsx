"use client";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-white pt-28 lg:pt-36 pb-20"
    >
      {/* =========================================================
          FUNDO
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow principal estático/suave */}
        <div className="absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl animate-pulse" />
        {/* Glow lateral */}
        <div className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-blue-50 blur-3xl" />
      </div>

      {/* Grid de fundo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 80%)",
        }}
      />

      {/* =========================================================
          CONTEÚDO PRINCIPAL (2 COLUNAS NO DESKTOP)
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center lg:gap-12">
          
          {/* =======================================================
              COLUNA ESQUERDA: TEXTOS E BOTÕES
          ======================================================= */}
          <div className="lg:col-span-6 text-left animate-fadeIn">
            
            {/* BADGE */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Chega de links confusos no WhatsApp ou Drive?
            </div>

            {/* TÍTULO */}
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Sua entrega de fotos profissional{" "}
              <span className="text-blue-600">começa aqui.</span>
            </h1>

            {/* SUBTÍTULO */}
            <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
              Organize ensaios, encante clientes com seleções fáceis e valorize o seu trabalho com galerias personalizadas.
            </p>

            {/* BOTÃO E BENEFÍCIOS */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* CTA principal com transição fluida do Tailwind */}
              <a
                href="https://app.photolove.com.br/login"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-slate-950/20 transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-600/30 hover:-translate-y-1 active:translate-y-0"
              >
                Começar agora gratuitamente
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </a>
            </div>

            {/* DETALHES ABAIXO DO BOTÃO */}
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
              <span>Teste grátis por 30 dias</span>
              <span>•</span>
              <span>Sem cartão de crédito</span>
            </div>

          </div>

          {/* =======================================================
              COLUNA DIREITA: IMAGEM / MOCKUP COM ANIMAÇÃO CSS
          ======================================================= */}
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative flex justify-center">
            {/* Glow decorativo por trás da imagem */}
            <div className="absolute -inset-4 rounded-[32px] bg-blue-200/40 blur-2xl pointer-events-none" />

            {/* Card com efeito de zoom suave e elevação no hover via Tailwind */}
            <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-2xl shadow-slate-900/10 group transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/10">
              <Image
                src="/images/baner.jpeg"
                alt="Demonstração da plataforma PhotoLove"
                width={1200}
                height={800}
                priority
                className="h-auto w-full rounded-xl object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Badge Flutuante Decorativo */}
            <div className="absolute -bottom-6 -left-4 hidden sm:flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md animate-bounce duration-1000">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500 shadow-sm">
                <Star size={20} className="fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Avaliação</p>
                <p className="text-sm font-bold text-slate-800">5.0 ⭐ de aprovação</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}