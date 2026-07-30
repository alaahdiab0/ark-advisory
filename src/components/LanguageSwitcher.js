"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 rounded-full border border-white text-white text-sm font-medium hover:bg-gold hover:border-gold hover:text-navy transition-colors"
    >
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
}