"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Zap, Leaf, Crown, Sparkles } from "lucide-react";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  icon: React.ReactNode;
  monthlyPrice: number;
  annualMonthlyPrice: number; // Valor equivalente por mês no plano anual
  annualTotal: number;
  discount: string;
  popular?: boolean;
  features: PlanFeature[];
}

const plans: Plan[] = [
  {
    id: "essential",
    name: "Essential Plan",
    icon: <Zap className="w-6 h-6 text-purple-600" />,
    monthlyPrice: 29.90,
    annualMonthlyPrice: 26.00,
    annualTotal: 312.00,
    discount: "13% OFF",
    features: [
      { name: "5GB de Armazenamento", included: true },
      { name: "Gestão de ensaios", included: true },
      { name: "Gestão de vendas", included: false },
      { name: "Seleção online", included: true },
      { name: "Download de fotos: individual", included: false },
      { name: "Download de fotos: em massa", included: false },
      { name: "Venda de fotos adicional", included: true },
      { name: "Marca d'água personalizada", included: false },
      { name: "Entrega final", included: false },
      { name: "Suporte: E-mail + WhatsApp", included: true },
    ],
  },
  {
    id: "advanced",
    name: "Advanced Plan",
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    monthlyPrice: 49.90,
    annualMonthlyPrice: 42.33,
    annualTotal: 508.00,
    discount: "15% OFF",
    popular: true,
    features: [
      { name: "15GB de Armazenamento", included: true },
      { name: "Gestão de ensaios", included: true },
      { name: "Gestão de vendas", included: true },
      { name: "Seleção online", included: true },
      { name: "Download de fotos: individual", included: true },
      { name: "Download de fotos: em massa", included: true },
      { name: "Venda de fotos adicional", included: true },
      { name: "Marca d'água personalizada", included: true },
      { name: "Entrega final", included: true },
      { name: "Suporte: E-mail + Chat", included: true },
    ],
  },
  {
    id: "master",
    name: "Master Plan",
    icon: <Crown className="w-6 h-6 text-purple-600" />,
    monthlyPrice: 99.90,
    annualMonthlyPrice: 82.91,
    annualTotal: 995.00,
    discount: "17% OFF",
    features: [
      { name: "100GB de Armazenamento", included: true },
      { name: "Gestão de ensaios", included: true },
      { name: "Gestão de vendas", included: true },
      { name: "Seleção online", included: true },
      { name: "Download de fotos: individual", included: true },
      { name: "Download de fotos: em massa", included: true },
      { name: "Venda de fotos adicional", included: true },
      { name: "Marca d'água personalizada", included: true },
      { name: "Entrega final", included: true },
      { name: "Suporte: E-mail + WhatsApp", included: true },
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="precos" className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Planos e Preços
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Escolha o plano ideal para o seu negócio
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Compare os planos e escolha aquele que melhor se adapta às suas necessidades.<br className="hidden sm:inline" />
            Nenhuma taxa escondida, apenas benefícios claros.
          </p>

          {/* =====================================================
              TOGGLE MENSAL / ANUAL
          ===================================================== */}
          <div className="mt-10 inline-flex items-center gap-4">
            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-slate-950" : "text-slate-500"}`}>
              Mensal
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full bg-blue-600 p-1 transition-colors duration-300 focus:outline-none shadow-inner"
              role="switch"
              aria-checked={isAnnual}
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md"
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold transition-colors ${isAnnual ? "text-slate-950" : "text-slate-500"}`}>
                Anual
              </span>
              <AnimatePresence>
                {isAnnual && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, x: -5 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -5 }}
                    className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold text-emerald-700 shadow-sm"
                  >
                    Até 17% de desconto
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =====================================================
            GRID DE PLANOS
        ===================================================== */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => {
            const currentPrice = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-cyan-400 shadow-cyan-500/10 lg:-translate-y-2"
                    : "border border-slate-200/80 shadow-slate-900/5 hover:border-blue-200"
                }`}
              >
                {/* Badge Popular */}
                {plan.popular && (
                  <div className="absolute -top-3.5 right-8 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md">
                    Popular
                  </div>
                )}

                <div>
                  {/* Ícone e Nome do Plano */}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 shadow-sm mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  </div>

                  {/* Preço com Animação na troca */}
                  <div className="mt-6 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm font-bold text-slate-900">R$</span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentPrice}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-4xl font-extrabold tracking-tight text-slate-950"
                        >
                          {currentPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-sm text-slate-500">/mês</span>
                    </div>

                    {/* Detalhes de cobrança anual / desconto */}
                    <div className="h-8 mt-1">
                      {isAnnual ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center justify-center gap-2 text-xs font-medium"
                        >
                          <span className="text-slate-400 line-through">
                            R$ {plan.monthlyPrice.toFixed(2).replace(".", ",")}
                          </span>
                          <span className="font-bold text-emerald-600">{plan.discount}</span>
                        </motion.div>
                      ) : (
                        <div className="text-xs text-transparent">espaço reservado</div>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 mt-0.5">
                      {isAnnual ? `R$ ${plan.annualTotal.toFixed(2).replace(".", ",")} cobrado anualmente` : "Cobrado mensalmente"}
                    </p>
                  </div>

                  {/* Lista de Benefícios */}
                  <div className="mt-8 border-t border-slate-100 pt-6 space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 mt-0.5">
                            <Check size={13} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-300 mt-0.5">
                            <X size={13} strokeWidth={2.5} />
                          </div>
                        )}
                        <span
                          className={`text-sm leading-snug ${
                            feature.included ? "text-slate-700 font-medium" : "text-slate-400 line-through"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão de Assinar */}
                <div className="mt-10">
                  <a
                    href="https://app.photolove.com.br/login"
                    className="flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:bg-cyan-300 hover:shadow-cyan-400/30 active:scale-[0.98]"
                  >
                    Assinar
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}