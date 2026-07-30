"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section
      className="relative w-full min-h-[480px] md:min-h-[500px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/about.hero.png')" }}
    >
      {/* Dark navy overlay - خفيف */}
      {/* Overlay محسّن */}
<div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
<div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/40 to-transparent" />
        {/* Heading content — now inside the hero section */}
        <div className="relative z-15 px-20 mt-40 md:px-24 max-w-2xl">
  <h1 className="gold-gradient-text text-5xl md:text-5xl font-bold text-white leading-tight">
    {t("about_story_title")}

          </h1>
          
        </div>
      </section>

    <main className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">{t("about_hero_title")}</h2>
          <div className="w-16 h-1 bg-gold mb-6 rounded" />
          <p className="text-text-secondary leading-8 text-lg" style={{ textAlign: "justify" }}>{t("about_hero_text")}</p>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">{t("about_who_title")}</h2>
          <div className="w-16 h-1 bg-gold mb-6 rounded" />
          <p className="text-text-secondary leading-8 text-lg" style={{ textAlign: "justify" }}>{t("about_who_text")}</p>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">{t("about_how_title")}</h2>
          <div className="w-16 h-1 bg-gold mb-6 rounded" />
          <p className="text-text-secondary leading-8 text-lg mb-4" style={{ textAlign: "justify" }}>{t("about_how_intro")}</p>
          <ul className="space-y-3 text-text-secondary leading-8 text-lg">
            <li>• {t("about_how_accounting")}</li>
            <li>• {t("about_how_audit")}</li>
            <li>• {t("about_how_tax")}</li>
            <li>• {t("about_how_consulting")}</li>
          </ul>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">{t("about_experience_title")}</h2>
          <div className="w-16 h-1 bg-gold mb-6 rounded" />
          <p className="text-text-secondary leading-8 text-lg" style={{ textAlign: "justify" }}>{t("about_experience_text")}</p>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">{t("about_message_title")}</h2>
          <div className="w-16 h-1 bg-gold mb-6 rounded" />
          <p className="text-text-secondary leading-8 text-lg" style={{ textAlign: "justify" }}>{t("about_message_text")}</p>
        </motion.section>

      </div>
    </main>
       </>
  );
}