"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const faqKeys = ["faq_1", "faq_2", "faq_3", "faq_4"];

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
            {t("faq_title")}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
        </div>

        <div className="space-y-3">
          {faqKeys.map((key, i) => (
            <div
              key={key}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-navy font-bold text-sm md:text-base bg-[#F5F1E9] hover:bg-[#efe9dc] transition-colors"
              >
                <span>{t(`${key}_q`)}</span>
                <svg
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 py-4 text-text-secondary text-sm leading-relaxed">
                      {t(`${key}_a`)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
