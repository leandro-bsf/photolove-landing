"use client";

import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  initials: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Cleila",
    role: "Fotógrafa Profissional",
    content:
      "Utilizei a Photo Love por alguns dias e achei muito intuitiva e bem fácil de usar, gostei bastante mesmo!",
    initials: "C",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Lary",
    role: "Fotógrafa de Casamentos",
    content:
      "Parabéns pela plataforma! A Photo Love é uma solução incrível para fotógrafos como eu. A interface é super amigável e a organização dos ensaios facilita muito meu trabalho.",
    initials: "L",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Carlos Oliveira",
    role: "Fotógrafo Comercial",
    content:
      "Sua plataforma é um divisor de águas para fotógrafos. A facilidade de organizar e compartilhar fotos com os clientes é incrível.",
    initials: "CO",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    name: "Ana Beatriz",
    role: "Retratista",
    content:
      "Gostei bastante da Photo Love, a mensagem automática que vai para o cliente já com a senha é muito prática.",
    initials: "AB",
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(testimonials.length / 2);

  const handleNext = () => {
    console.log("CLICOU PRÓXIMO");

    setCurrentIndex((current) => {
      console.log("ÍNDICE ATUAL:", current);

      const next = current + 1 >= totalPages ? 0 : current + 1;

      console.log("NOVO ÍNDICE:", next);

      return next;
    });
  };

  const handlePrev = () => {
    console.log("CLICOU ANTERIOR");

    setCurrentIndex((current) => {
      const previous =
        current - 1 < 0 ? totalPages - 1 : current - 1;

      console.log("NOVO ÍNDICE:", previous);

      return previous;
    });
  };

  const startIndex = currentIndex * 2;

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + 2
  );

  return (
    <section
      id="depoimentos"
      className="relative bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* TÍTULO */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Depoimentos
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Quem usa, recomenda e aprova
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Veja o que fotógrafos de todo o país estão falando sobre a
            experiência com a Photo Love.
          </p>
        </div>

        {/* CONTROLES */}
        <div className="mt-16 flex items-center justify-between border-b border-slate-100 pb-4">

          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Mostrando{" "}
            {startIndex + 1}-
            {Math.min(startIndex + 2, testimonials.length)}{" "}
            de {testimonials.length} depoimentos
          </span>

          <div className="flex items-center gap-2">

            {/* ANTERIOR */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Depoimento anterior"
              className="relative z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            {/* PRÓXIMO */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próximo depoimento"
              className="relative z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

          {visibleTestimonials.map((item) => (
            <div
              key={item.name}
              className="group relative flex min-h-[320px] flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200"
            >

              {/* CITAÇÃO */}
              <div className="pointer-events-none absolute right-8 top-8 text-slate-100">
                <Quote size={48} />
              </div>

              {/* CONTEÚDO */}
              <div className="relative z-10">

                {/* ESTRELAS */}
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* DEPOIMENTO */}
                <p className="text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                  &ldquo;{item.content}&rdquo;
                </p>

              </div>

              {/* AUTOR */}
              <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-base font-bold text-white shadow-md`}
                >
                  {item.initials}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-xs font-medium text-slate-400">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* INDICADORES */}
        <div className="mt-10 flex items-center justify-center gap-2">

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                console.log("INDICADOR:", index);
                setCurrentIndex(index);
              }}
              aria-label={`Ir para a página ${index + 1}`}
              className={`relative z-50 h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-blue-600"
                  : "w-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}