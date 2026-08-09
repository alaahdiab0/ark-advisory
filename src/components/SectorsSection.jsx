"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShoppingCart,
  Store,
  Plane,
  Factory,
  Building2,
  Pill,
  UtensilsCrossed,
  Ship,
} from "lucide-react";

export default function SectorsSection() {
  const { t } = useLanguage();

  const industries = [
    {
      slug: "trade",
      title: t("industry_trade_title"),
      icon: ShoppingCart,
    },
    {
      slug: "ecommerce",
      title: t("industry_ecommerce_title"),
      icon: Store,
    },
    {
      slug: "tourism",
      title: t("industry_tourism_title"),
      icon: Plane,
    },
    {
      slug: "manufacturing",
      title: t("industry_manufacturing_title"),
      icon: Factory,
    },
    {
      slug: "contracting",
      title: t("industry_contracting_title"),
      icon: Building2,
    },
    {
      slug: "pharma",
      title: t("industry_pharma_title"),
      icon: Pill,
    },
    {
      slug: "restaurants",
      title: t("industry_restaurants_title"),
      icon: UtensilsCrossed,
    },
    {
      slug: "import_export",
      title: t("industry_import_export_title"),
      icon: Ship,
    },
  ];

  return (
    <section className="bg-[#F0EAD9] py-24" dir="rtl">
      <div className="max-w-5xl mx-auto text-center px-6">
        <p className="uppercase tracking-[4px] text-sm font-semibold text-[#D4A94F]">
          {t("sectors_badge")}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1E2233] mt-3">
          {t("sectors_title")}
        </h2>

        <p className="text-gray-600 leading-relaxed mt-6 max-w-3xl mx-auto">
          {t("sectors_description")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-6">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <Link
              key={industry.slug}
              href={`/industries#${industry.slug}`}
              className="group flex flex-col items-center justify-center text-center h-full bg-white rounded-2xl p-8 border-2 border-[#D4A94F] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D4A94F]/10 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-[#D4A94F]" />
              </div>

              <h3 className="text-lg font-bold text-[#1E2233]">
                {industry.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
