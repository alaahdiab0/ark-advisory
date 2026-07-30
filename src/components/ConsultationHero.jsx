"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function ConsultationHero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative w-full min-h-[480px] md:min-h-[500px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/consulta.hero.png')" }}
    >
      {/* Dark navy overlay - خفيف */}
      {/* Overlay محسّن */}
<div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
<div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl pt-24"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            {t("consultation_hero_title_line1")}{" "}
            <span className="gold-gradient-text">
              {t("consultation_hero_title_line2")}
            </span>
          </h1>

        </motion.div>
      </div>
    </section>
  );
}