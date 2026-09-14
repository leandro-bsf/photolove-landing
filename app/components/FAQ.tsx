"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "O que é a Photo Love?",
    answer: "A Photo Love é uma plataforma para fotógrafos entregarem fotos de forma profissional para seus clientes. Você pode organizar ensaios, compartilhar galerias e permitir downloads de forma simples e elegante.",
  },
  {
    question: "Meus clientes precisam criar conta?",
    answer: "Não! Seus clientes acessam as fotos apenas com um link e senha, sem precisar criar conta. Isso torna a experiência muito mais simples e rápida.",
  },
  {
    question: "Como envio minhas fotos?",
    answer: "Você pode fazer upload das fotos diretamente pela plataforma, organizando tudo por ensaio. O processo é rápido e pensado para facilitar seu fluxo de trabalho.",
  },
  {
    question: "Posso proteger meus ensaios com senha?",
    answer: "Sim! Você pode definir senhas para cada ensaio, garantindo que apenas pessoas autorizadas tenham acesso às fotos.",
  },
  {
    question: "O cliente pode baixar todas as fotos de uma vez?",
    answer: "Sim! Seus clientes podem baixar fotos individuais ou todas de uma vez, de forma simples e rápida.",
  },
  {
    question: "Qual a diferença da Photo Love para Google Drive ou WeTransfer?",
    answer: "Diferente dessas ferramentas, a Photo Love foi criada especialmente para fotógrafos. Você tem uma apresentação profissional das fotos, organização por ensaio e uma experiência muito melhor para o cliente.",
  },
  {
    question: "Posso alterar ou adicionar fotos depois?",
    answer: "Sim! Você pode editar seus ensaios a qualquer momento, adicionando ou removendo fotos conforme necessário.",
  },
  {
    question: "O plano gratuito tem limitações?",
    answer: "Sim, o plano gratuito possui limites de armazenamento e em dias de acesso. Você pode fazer upgrade a qualquer momento para desbloquear mais recursos.",
  },
  {
    question: "Posso cancelar minha assinatura quando quiser?",
    answer: "Sim! Você pode cancelar a qualquer momento, sem taxas. Você continuará com acesso até o final do período já pago.",
  },
  {
    question: "Minhas fotos estão seguras?",
    answer: "Sim. Utilizamos boas práticas de segurança e proteção de dados para garantir que suas fotos e informações estejam seguras.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primeiro aberto por padrão

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative bg-slate-50/50 py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        
        {/* =====================================================
            HEADER DA SEÇÃO COM ANIMAÇÃO DE ENTRADA
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Dúvidas Frequentes
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Perguntas Frequentes
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Tudo o que você precisa saber sobre a plataforma e como ela funciona.
          </p>
        </motion.div>

        {/* =====================================================
            LISTA DE ACORDEÕES DO FAQ
        ===================================================== */}
        <div className="mt-16 space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 shadow-sm ${
                  isOpen 
                    ? "border-blue-300 shadow-blue-500/5 ring-2 ring-blue-500/10" 
                    : "border-slate-200/80 hover:border-blue-200"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer transition-colors"
                >
                  <span className="font-bold text-slate-900 text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isOpen ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}