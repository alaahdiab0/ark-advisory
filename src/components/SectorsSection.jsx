"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function SectorsSection() {
  const { t } = useLanguage();

  return (
    <section id="sectors" className="py-16 bg-[#F5F1E9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="text-gold font-bold text-sm uppercase tracking-wider">
            {t("sectors_badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2">
            {t("sectors_title")}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
          <p
            className="text-text-secondary mt-6 max-w-3xl mx-auto px-6 leading-8 text-lg"
            style={{ textAlign: "justify" }}
          >
            {t("sectors_text")}
          </p>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-gradient-to-r from-gold to-gold-hover text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {t("sectors_cta")}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
