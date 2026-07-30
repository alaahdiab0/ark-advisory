"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";



export default function ServicesPage() {
  const { t } = useLanguage();

const items = [
  {
    title: t("formation_legal_form_title"),
    desc: t("formation_legal_form_desc"),
    services: [
      t("formation_legal_form_1"),
      t("formation_legal_form_2"),
      t("formation_legal_form_3"),
    ],
  },
  {
    title: t("formation_documents_title"),
    desc: t("formation_documents_desc"),
    services: [
      t("formation_documents_1"),
      t("formation_documents_2"),
      t("formation_documents_3"),
    ],
  },
  {
    title: t("formation_registration_title"),
    desc: t("formation_registration_desc"),
    services: [
      t("formation_registration_1"),
      t("formation_registration_2"),
      t("formation_registration_3"),
    ],
  },
  {
    title: t("formation_post_title"),
    desc: t("formation_post_desc"),
    services: [
      t("formation_post_1"),
      t("formation_post_2"),
      t("formation_post_3"),
    ],
  },
  {
    title: t("formation_amendments_title"),
    desc: t("formation_amendments_desc"),
    services: [
       t("formation_amendments_1"),
      t("formation_amendments_2"),
     t("formation_amendments_3"),
       t("formation_amendments_4"),
       t("formation_amendments_5"),
       ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

return (
    
    <div >
      {/* Hero Section */}
      <section
        className="relative h-[380px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/form.ser.png.jpeg')" }}
      >
        <div className="absolute inset-0 bg-navy/65 z-10" />
        <h1 className="relative z-20 text-white font-extrabold text-4xl md:text-5xl lg:text-6xl text-center tracking-wide">
          {t("services_formation_title")}
        </h1>
      </section>

      {/* Details Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-white border border-glass-border rounded-2xl p-8 shadow-md mb-6"
            >
              <h2 className="text-2xl font-extrabold text-navy mb-3">{item.title}</h2>
              <p className="text-text-secondary leading-relaxed mb-6">{item.desc}</p>
              <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-3">{t("our_services_title")}</h4>
              <ul className="space-y-3.5">
                {item.services.map((srv, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-secondary text-[0.95rem] leading-relaxed">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {srv}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
