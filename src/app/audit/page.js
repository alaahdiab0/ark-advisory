"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function AuditPage() {
  const { t } = useLanguage();

  const items = [
    {
      title: t("audit_annual_title"),
      desc: t("audit_annual_desc"),
      services: [
        t("audit_annual_1"),
        t("audit_annual_2"),
        t("audit_annual_3"),
        t("audit_annual_4"),
      ],
    },
    {
      title: t("audit_internal_control_title"),
      desc: t("audit_internal_control_desc"),
      services: [
        t("audit_internal_control_1"),
        t("audit_internal_control_2"),
        t("audit_internal_control_3"),
        t("audit_internal_control_4"),
      ],
    },
    {
      title: t("audit_internal_review_title"),
      desc: t("audit_internal_review_desc"),
      services: [
        t("audit_internal_review_1"),
        t("audit_internal_review_2"),
        t("audit_internal_review_3"),
        t("audit_internal_review_4"),
      ],
    },
    {
      title: t("audit_special_title"),
      desc: t("audit_special_desc"),
      services: [
        t("audit_special_1"),
        t("audit_special_2"),
        t("audit_special_3"),
        t("audit_special_4"),
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/audit.ser.png.jpeg')` }}
      >
        <div className="absolute inset-0 bg-navy/65 z-10" />
        <h1 className="relative z-20 text-white font-extrabold text-4xl md:text-5xl lg:text-6xl text-center tracking-wide">
          {t("service_audit_title")}
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
              <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-3">{t("service_include_title")}</h4>
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