"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FolderOpen,
  MessageCircle,
  RefreshCw,
  Smartphone,
  Sparkles,
} from "lucide-react";

const problems = [
  {
    icon: MessageCircle,
    title: "Mensagens espalhadas",
    description:
      "Fotos, escolhas e alterações ficam perdidas em conversas do WhatsApp.",
  },
  {
    icon: FolderOpen,
    title: "Arquivos desorganizados",
    description:
      "Pastas, links e versões diferentes dificultam o controle de cada ensaio.",
  },
  {
    icon: RefreshCw,
    title: "Muito retrabalho",
    description:
      "Você perde tempo conferindo escolhas, respondendo mensagens e organizando arquivos.",
  },
  {
    icon: Clock3,
    title: "Entrega mais demorada",
    description:
      "Quanto mais processos manuais, mais tempo você leva para finalizar cada trabalho.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Crie seu ensaio",
    description: "Organize todas as informações em um único painel.",
  },
  {
    number: "02",
    title: "Envie suas fotos",
    description: "Compartilhe uma experiência profissional com seu cliente.",
  },
  {
    number: "03",
    title: "Receba a seleção",
    description: "Seu cliente escolhe as fotos de forma simples e intuitiva.",
  },
  {
    number: "04",
    title: "Venda e entregue",
    description: "Gerencie pedidos e finalize seu trabalho com mais tranquilidade.",
  },
];

export default function Problem() {
  return (
    <section
      id="solucao"
      className="relative overflow-hidden bg-slate-50 py-24 md:py-32"
    >
      {/* =====================================================
          DECORAÇÃO DE FUNDO (Estática e segura)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        
        {/* =====================================================
            CABEÇALHO
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 shadow-sm">
            <Sparkles size={14} className="text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
            Menos complicação
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
          Pare de perder tempo
            <span className="block text-blue-600 mt-1">
            com tarefas que não vendem.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Quando cada ensaio depende de WhatsApp, Drive e vários processos
            manuais, pequenos problemas acabam consumindo horas da sua rotina.
          </p>
        </div>

        {/* =====================================================
            FLUXO DO PROBLEMA (4 CARDS SUPERIORES)
        ===================================================== */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Linha de conexão central */}
          <div className="absolute left-1/2 top-8 hidden h-px w-[70%] -translate-x-1/2 bg-slate-200 md:block" />

          <div className="grid gap-6 md:grid-cols-4">
            <ProblemStep
              number="01"
              icon={<Smartphone size={22} />}
              title="WhatsApp"
              description="Mensagens, fotos e pedidos espalhados."
            />
            <ProblemStep
              number="02"
              icon={<FolderOpen size={22} />}
              title="Drive"
              description="Links, pastas e arquivos para controlar."
            />
            <ProblemStep
              number="03"
              icon={<RefreshCw size={22} />}
              title="Retrabalho"
              description="Conferências e mensagens que se repetem."
            />
            <ProblemStep
              number="04"
              icon={<Clock3 size={22} />}
              title="Tempo perdido"
              description="Menos tempo para fotografar e crescer."
            />
          </div>
        </div>

        {/* =====================================================
            SETA DE TRANSFORMAÇÃO
        ===================================================== */}
        <div className="my-14 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 shadow-xl shadow-blue-500/10 animate-bounce">
            <ArrowDown size={22} />
          </div>
        </div>

        {/* =====================================================
            TRANSFORMAÇÃO (ANTES X COM PHOTO LOVE)
        ===================================================== */}
        <div className="overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-2xl shadow-slate-900/10">
          <div className="grid lg:grid-cols-2">
            
            {/* LADO ESQUERDO: ANTES */}
            <div className="relative overflow-hidden bg-slate-950 p-8 md:p-12 text-white">
              {/* Efeito de brilho de fundo */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

              <div className="relative">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-300">
                  Antes
                </span>

                <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                  Processos espalhados consomem seu tempo.
                </h3>

                <div className="mt-8 space-y-4">
                  {problems.map((problem) => {
                    const Icon = problem.icon;

                    return (
                      <div
                        key={problem.title}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:scale-[1.01] cursor-default"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-400">
                          <Icon size={19} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {problem.title}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-slate-400">
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* LADO DIREITO: COM PHOTO LOVE */}
            <div className="relative overflow-hidden p-8 md:p-12 bg-gradient-to-br from-white via-blue-50/20 to-blue-50/60">
              {/* Efeito de brilho de fundo */}
              <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl pointer-events-none" />

              <div className="relative">
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
                  Com Photo Love
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-950 md:text-3xl">
                  Tudo organizado em um só lugar.
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Transforme tarefas manuais em um fluxo simples e profissional
                  para você e para seus clientes.
                </p>

                {/* Fluxo com soluções */}
                <div className="mt-8 space-y-3">
                  {solutions.map((item) => (
                    <div
                      key={item.number}
                      className="flex gap-4 rounded-2xl border border-slate-100 bg-white/70 backdrop-blur-sm p-4 transition-all duration-300 hover:translate-x-1.5 hover:shadow-md hover:bg-white cursor-default"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-600/20">
                        {item.number}
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Banner de resultado */}
                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-blue-200 bg-white p-4 shadow-md shadow-blue-500/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/30">
                    <CheckCircle2 size={21} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Menos retrabalho.
                    </p>
                    <p className="text-sm text-slate-600">
                      Mais tempo para o que realmente importa.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            CTA INFERIOR
        ===================================================== */}
        <div className="mt-12 text-center">
          <a
            href="#recursos"
            className="group inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Descubra tudo que você pode fazer com o Photo Love
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>
        </div>

      </div>
    </section>
  );
}

/* ===============================================================
    ETAPA DO PROBLEMA
================================================================ */

function ProblemStep({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative text-center rounded-3xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-900/5 group transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-blue-500/5">
      <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-blue-50 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <span className="mt-4 block text-xs font-bold tracking-widest text-blue-600">
        {number}
      </span>

      <h3 className="mt-2 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-[210px] text-sm leading-relaxed text-slate-500">
        {description}
      </p>
    </div>
  );
}