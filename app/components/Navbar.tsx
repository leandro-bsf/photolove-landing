"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Funcionalidades", href: "#recursos" },
  { label: "Planos", href: "#precos" },
  { label: "Depoimentos", href: "#depoimentos" },

];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/90 px-5 shadow-lg shadow-slate-900/5 backdrop-blur-xl md:px-7">
        {/* Logo */}
       <a
          href="#inicio"
          className="relative z-10 flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative flex items-center h-8 md:h-10 overflow-hidden">
            <Image
              src="/images/logo2.png"
              alt="Photo Love"
              width={140}
              height={45}
              priority
              className="h-full w-auto object-contain object-left"
            />
          </div>
        </a>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-7 lg:gap-9 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Ações Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://app.photolove.com.br/login"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600"
          >
            Entrar
          </a>

          <a
            href="https://app.photolove.com.br/cadastro"
            className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
          >
            Comece grátis
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="relative z-10 rounded-xl p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-[72px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="my-2 h-px bg-slate-100" />

                <a
                  href="https://app.photolove.com.br/login"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Entrar
                </a>

                <a
                  href="https://app.photolove.com.br/login"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Comece grátis
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}