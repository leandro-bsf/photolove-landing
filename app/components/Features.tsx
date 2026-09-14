"use client";

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Check,
  Image as ImageIcon,
  Layers3,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

const recursos = [
  {
    titulo: "GESTÃO COMPLETA DE ENSAIOS",
    subtitulo: "Organize, controle e entregue com perfeição.",
    descricao:
      "Tenha todos os seus ensaios em um só painel simples, rápido e profissional.",
    imagem: "/images/ensaio.jpg",
    icone: Layers3,
    slogan:    "Organização, Controle e  Entregua.", 
    beneficios: [
      "Acompanhe cada etapa com facilidade",
      "Ganhe tempo e evite retrabalho",
      "Automatize sua rotina",
      "Transmita mais profissionalismo",
      "Deixe tudo sob seu controle",
    ],
  },
  {
    titulo: "SELEÇÃO DE FOTOS",
    subtitulo:
      "Transforme a escolha de fotos em uma experiência incrível.",
    descricao:
      "Envie um link exclusivo e permita que seus clientes escolham suas fotos preferidas com poucos cliques.",
    imagem: "/images/entrega.png",
    icone: ImageIcon,
     slogan:    "Facilidade e Praticidade", 
    beneficios: [
      "Seleção fácil e intuitiva",
      "Zero confusão e mensagens trocadas",
      "Mais rapidez na entrega final",
      "Link protegido por senha",
      "Impressione seus clientes com praticidade",
    ],
  },
  {
    titulo: "VENDA POR PACOTE OU FOTOS INDIVIDUAIS",
    subtitulo: "Mais liberdade, mais lucro.",
    descricao:
      "Ofereça opções de compra flexíveis e aumente suas vendas com facilidade.",
    imagem: "/images/tipo_ensaio.png",
    icone: ShoppingBag,
    slogan:"Venda do seu jeito, lucre mais.", 
    beneficios: [
      "Venda pacotes ou fotos avulsas",
      "Mais opções para seus clientes",
      "Aumente o ticket médio",
      "Gerencie preços com praticidade",
      "Ganhe mais com o mesmo esforço",
    ],
  },
  {
    titulo: "PROTEJA SUAS FOTOS COM MARCA D'ÁGUA EXCLUSIVA",
    subtitulo: "Proteja seu trabalho e fortaleça sua marca.",
    descricao:
      "Aplique sua marca d’água automaticamente e garanta segurança em cada clique.",
    imagem: "/images/marca-dagua.png",
    icone: ShieldCheck,
     slogan:"Segurança e Controle", 
    beneficios: [
      "Evite cópias não autorizadas",
      "Mostre profissionalismo em cada imagem",
      "Fortaleça sua identidade visual",
      "Aumente a credibilidade do seu trabalho",
      "Proteja seu conteúdo com estilo",
    ],
  },
  {
    titulo: "RELATÓRIOS COMPLETOS DE VENDAS",
    subtitulo: "Entenda seus números e cresça com estratégia.",
    descricao:
      "Descubra quais ensaios mais vendem, acompanhe resultados e veja seu faturamento crescer.",
    imagem: "/images/relatorio.jpg",
    icone: BarChart3,
    slogan:"Venda do seu jeito. Lucre ainda mais.", 
    beneficios: [
      "Acompanhe vendas em tempo real",
      "Gráficos claros e interativos",
      "Veja o que mais gera lucro",
      "Identifique oportunidades de crescimento",
      "Tome decisões com base em dados",
    ],
  },
];

export default function Features() {
  return (
    <section
      id="recursos"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Fundo decorativo estático e limpo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* ================================
            CABEÇALHO
        ================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 shadow-sm">
            Recursos Exclusivos
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Tudo que você precisa para{" "}
            <span className="text-blue-600">
              profissionalizar seus ensaios.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Organize sua rotina, facilite a vida dos seus clientes e
            transforme seus ensaios em uma experiência muito mais profissional.
          </p>
        </div>

        {/* ================================
            LISTA DE RECURSOS (INTERATIVA)
        ================================= */}

        <div className="mt-24 space-y-28 md:mt-32 md:space-y-36">

          {recursos.map((recurso, index) => {
            const Icon = recurso.icone;
            const invertido = index % 2 !== 0;

            return (
              <div
                key={recurso.titulo}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  invertido ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >

                {/* ============================
                    COLUNA DE TEXTO
                ============================= */}

                <div className="text-left group/text p-4 md:p-6 rounded-3xl transition-all duration-300 hover:bg-blue-50/20">
                  
                  {/* Ícone + categoria */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm transition-transform duration-300 group-hover/text:scale-110 group-hover/text:bg-blue-600 group-hover/text:white">
                      <Icon size={22} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.15em] text-blue-600">
                      {recurso.titulo}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl">
                    {recurso.subtitulo}
                  </h3>

                  {/* Descrição */}
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                    {recurso.descricao}
                  </p>

                  {/* Benefícios */}
                  <div className="mt-7 space-y-3.5">
                    {recurso.beneficios.map((beneficio) => (
                      <div
                        key={beneficio}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:bg-blue-600 group-hover/item:text-white">
                          <Check size={14} strokeWidth={3} />
                        </div>

                        <span className="text-sm font-medium text-slate-700 md:text-base transition-colors duration-200 group-hover/item:text-slate-950">
                          {beneficio}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Interativo */}
                  <div className="mt-8">
                    <a
                      href="https://app.photolove.com.br/login"
                      className="group/btn inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:text-blue-700"
                    >
                      <span>Comece grátis</span>
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover/btn:translate-x-2"
                      />
                    </a>
                  </div>

                </div>

                {/* ============================
                    COLUNA DE IMAGEM / MOCKUP
                ============================= */}

                <div className="relative">

                  {/* Glow atrás da imagem */}
                  <div className="absolute -inset-6 rounded-[40px] bg-blue-200/30 blur-2xl pointer-events-none transition-all duration-500 group-hover:bg-blue-300/40" />

                  {/* Moldura do Card com efeito hover */}
                  <div className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 transition-transform duration-500 hover:-translate-y-2">

                    {/* Barra superior estilo navegador */}
                    <div className="flex h-10 items-center gap-1.5 border-b border-slate-100 bg-slate-50/80 px-4 backdrop-blur-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      <div className="ml-3 h-4 w-32 rounded-md bg-slate-200/60" />
                    </div>

                    {/* IMAGEM COM ZOOM SUAVE */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={recurso.imagem}
                        alt={recurso.subtitulo}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                  </div>

                  {/* Badge Flutuante */}
                  <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm">
                        <Check size={18} strokeWidth={3} />
                      </div>

                      <div>
                        <p className="text-[11px] font-medium text-slate-400">
                          Resultados
                        </p>
                        <p className="text-xs font-bold text-slate-800">
                           { recurso.slogan}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}