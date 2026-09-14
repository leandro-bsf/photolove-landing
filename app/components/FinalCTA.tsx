"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-slate-950 py-24 md:py-32">
      {/* Background Glow Efeitos Visuais */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 md:px-8 text-center">
        
        {/* Badge Decorativo Superior */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-8 shadow-inner">
          <Sparkles size={14} />
          <span>Transforme sua fotografia</span>
        </div>

        {/* Título Principal */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl max-w-3xl mx-auto leading-tight">
          Suas fotos merecem uma entrega profissional.
        </h2>

        {/* Subtítulo */}
        <p className="mt-6 text-base md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Pare de enviar fotos pelo WhatsApp ou organizar entregas pelo Drive.
          <br className="hidden sm:inline" />
          <span className="text-white font-medium mt-2 block">
            Com o Photo Love, você entrega, organiza e vende suas fotos em um só lugar.
          </span>
        </p>

        {/* Botão de Ação (CTA Principal) */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <a
            href="https://app.photolove.com.br/login"
            className="group inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-5 text-base font-bold text-slate-950 shadow-xl shadow-cyan-400/20 transition-all duration-300 hover:bg-cyan-300 hover:scale-105 active:scale-95"
          >
            <span>🚀 Começar grátis</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Informações abaixo do botão */}
          <div className="mt-4 flex items-center gap-2 text-xs md:text-sm font-medium text-slate-400">
            <span>30 dias grátis</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>Sem cartão de crédito</span>
          </div>
        </div>

      </div>
    </section>
  );
}