import Link from "next/link";
import { Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 text-slate-400 py-16 md:py-20 z-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Topo do Footer: Marca, Descrição e Redes Sociais */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12 border-b border-slate-900">
          <div className="space-y-4 max-w-md">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white font-black text-2xl tracking-tight">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                <Camera size={22} />
              </div>
              <span>Photo Love</span>
            </Link>

            <p className="text-sm md:text-base leading-relaxed text-slate-400">
              A plataforma definitiva para fotógrafos entregarem galerias, organizarem ensaios e encantarem clientes de forma profissional.
            </p>
          </div>

          {/* Redes Sociais com SVG Nativo */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/photoloveadm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 transition-all hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61560747365598"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 transition-all hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.5 5 15.5 5H18V0h-3.808C10.5 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 transition-all hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Menus e Navegação na parte inferior */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 pb-12 border-b border-slate-900">
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Produto</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#solucao" className="transition-colors hover:text-white">Solução</Link></li>
              <li><Link href="#recursos" className="transition-colors hover:text-white">Funcionalidades</Link></li>
              <li><Link href="#precos" className="transition-colors hover:text-white">Planos</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Experiência</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#depoimentos" className="transition-colors hover:text-white">Depoimentos</Link></li>
              <li><Link href="#faq" className="transition-colors hover:text-white">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Suporte</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">WhatsApp</a></li>
              <li><Link href="/central-ajuda" className="transition-colors hover:text-white">Central de Ajuda</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/termos" className="transition-colors hover:text-white">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="transition-colors hover:text-white">Privacidade</Link></li>
            </ul>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Photo Love. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">Feito com dedicação para fotógrafos profissionais 📸</p>
        </div>

      </div>
    </footer>
  );
}