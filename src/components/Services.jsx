"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Landmark,
  LineChart,
  Building2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
const { t, lang } = useLanguage();
  const services = [
    {
      title: t("service_audit"),
      href: "/audit",
      icon: ClipboardCheck,
    },
    {
      title: t("service_tax"),
      href: "/tax",
      icon: Landmark,
    },
    {
      title: t("service_consulting"),
      href: "/consulting",
      icon: LineChart,
    },
    {
      title: t("service_formation"),
      href: "/formation",
      icon: Building2,
    },
  ];

  return (
    <section
      id="services"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative py-20 px-6 bg-[#FBF6EC]"
    >
      <div className="max-w-6xl mx-auto text-center mb-14">
        <span className="text-[#D4A94F] font-semibold tracking-wide">
          {t("services_badge")}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E2233] mt-3">
          {t("services_heading")}
        </h2>
        <p className="text-[#1E2233]/70 mt-4">
          {t("services_subheading")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group flex flex-col items-center justify-center text-center h-full bg-white rounded-2xl p-8 border-2 border-[#D4A94F] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#D4A94F]/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#D4A94F]" />
                </div>

                <h3 className="text-lg font-bold text-[#1E2233]">
                  {service.title}
                </h3>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
