"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "5546991413884"; // coloque aqui o número real
  const message = encodeURIComponent(
    "Olá! Conheci o Photo Love pela página e gostaria de tirar uma dúvida."
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Photo Love pelo WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-2xl
        active:scale-95
      "
    >
      <MessageCircle size={28} strokeWidth={2.5} />
    </a>
  );
}