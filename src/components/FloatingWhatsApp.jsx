"use client";
import { trackEvent } from "@/lib/analytics";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    trackEvent("whatsapp_click", { location: "header" });
  };

  return (
    <a
      href="https://wa.me/201012510242"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      onClick={handleClick}
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
