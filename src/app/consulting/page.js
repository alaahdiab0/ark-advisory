"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";


export default function ConsultingPage() {
  const { t } = useLanguage();

const items = [
  {
    title: t("consulting_performance_title"),
    desc: t("consulting_performance_desc"),
    services: [
       t("consulting_performance_1"),
      t("consulting_performance_2"),
      t("consulting_performance_3"),
    ],
  },
  {
    title: t("consulting_cashflow_title"),
    desc: t("consulting_cashflow_desc"),
    services: [
      t("consulting_cashflow_1"),
      t("consulting_cashflow_2"),
      t("consulting_cashflow_3"),
    ],
  },
  {
    title: t("consulting_expansion_title"),
    desc: t("consulting_expansion_desc"),
    services: [
      t("consulting_expansion_1"),
      t("consulting_expansion_2"),
      t("consulting_expansion_3"),
    ],
  },
  {
    title: t("consulting_budgeting_title"),
    desc: t("consulting_budgeting_desc"),
    services: [
      t("consulting_budgeting_1"),
      t("consulting_budgeting_2"),
      t("consulting_budgeting_3"),
    ],
  },
  {
    title: t("consulting_kpis_title"),
    desc: t("consulting_kpis_desc"),
    services: [
      t("consulting_kpis_1"),
      t("consulting_kpis_2"),
      t("consulting_kpis_3"),
      t("consulting_kpis_4"),
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
        style={{ backgroundImage: `url('/consult.ser.png.jpeg')` }}
      >
        <div className="absolute inset-0 bg-navy/65 z-10" />
        <h1 className="relative z-20 text-white font-extrabold text-4xl md:text-5xl lg:text-6xl text-center tracking-wide">
          {t("services_consulting_title")}
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
