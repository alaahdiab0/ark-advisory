"use client";
import Services from "@/components/Services"; 
import SectorsSection from "../components/SectorsSection";
import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function HomePage() {
 const { t, lang } = useLanguage();
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">

          <Image src="/hero.png.jpeg" alt="Ark Accounting" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-[1]" />

        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gold/15 border border-gold/25 rounded-full text-gold text-sm font-bold mb-6">
                <span className="w-2 h-2 bg-gold rounded-full shadow-[0_0_8px_var(--color-gold)]" />

                {t("hero_badge")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
  {t("hero_title_line1")}
  <br />
  <span className="gold-gradient-text">{t("hero_title_line2")}</span>
</h1>
             
<div className="flex flex-wrap gap-4">
  <Link href="/consultation" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold to-gold-hover text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
    {t("hero_cta_primary")}
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  </Link>
</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY US SECTION ── */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <span className="text-gold font-bold text-sm uppercase tracking-wider">{t("why_us_label")}</span>
            
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
            <p
  dir={lang === "ar" ? "rtl" : "ltr"}
  className="text-text-secondary mt-6 max-w-5xl mx-auto px-6 leading-8 text-lg"
  style={{ textAlign: "justify" }}
>
  {t("why_us_text")}
</p>

            <div className="text-center mt-8">
              <Link href="/about" className="inline-block bg-[#C8A74E] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#b38b2d] transition">
                {t("why_us_cta")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Services />

      {/* ── SECTORS SECTION ── */}
     
<SectorsSection />
    </>
  );
}