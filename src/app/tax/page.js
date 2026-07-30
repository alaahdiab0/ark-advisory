"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";


export default function ServicesPage() {
  const { t } = useLanguage();

const items = [
  {
    title: t("tax_einvoice_title"), 
    desc: t("tax_einvoice_desc"),
    services: [
      t("tax_einvoice_1"),
      t("tax_einvoice_2"),
      t("tax_einvoice_3"),
      t("tax_einvoice_4"),
    ],
  },
  {
    title: t("tax_returns_title"),
    desc: t("tax_returns_desc"),
    services: [
      t("tax_returns_1"),
      t("tax_returns_2"),
      t("tax_returns_3"),
      t("tax_returns_4"),
    ],
  },
  {
    title: t("tax_labor_title"),
    desc: t("tax_labor_desc"),
    services: [
      t("tax_labor_1"),
      t("tax_labor_2"),
      t("tax_labor_3"),
      t("tax_labor_4"),
    ],
  },
  {
    title: t("tax_realestate_title"),
    desc: t("tax_realestate_desc"),
    services: [
      t("tax_realestate_1"),
      t("tax_realestate_2"),
      t("tax_realestate_3"),
      t("tax_realestate_4"),
    ],
  },
  {
    title: t("tax_examination_title"),
    desc: t("tax_examination_desc"),
    services: [
      t("tax_examination_1"),
      t("tax_examination_2"),
      t("tax_examination_3"),
      t("tax_examination_4"),
      
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
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/tax.Ser.png.jpeg')` }}
      >
        <div className="absolute inset-0 bg-navy/65 z-10" />
        <h1 className="relative z-20 text-white font-extrabold text-4xl md:text-5xl lg:text-6xl text-center tracking-wide">
          {t("services_tax_title")}
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
              <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-3">{t("service_tax_include_title")}</h4>
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
