"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ShoppingCart,
  Store,
  Factory,
  Plane,
  Building2,
  Pill,
  UtensilsCrossed,
  Ship,
} from "lucide-react";

export default function IndustriesPage() {
  const { t } = useLanguage();

  const industries = [
    {
      title: t("industry_trade_title"),
      icon: ShoppingCart,
      image: "/trade.png.jpeg",
      description: t("industry_trade_desc"),
    },
    {
      title: t("industry_ecommerce_title"),
      icon: Store,
      image: "/e-commerce.png.png",
      description: t("industry_ecommerce_desc"),
    },
    {
      title: t("industry_tourism_title"),
      icon: Plane,
      image: "/tourism.png.jpeg",
      description: t("industry_tourism_desc"),
    },
    {
      title: t("industry_manufacturing_title"),
      icon: Factory,
      image: "/manufacture.png.jpeg",
      description: t("industry_manufacturing_desc"),
    },
    {
      title: t("industry_contracting_title"),
      icon: Building2,
      image: "/construction.png.jpeg",
      description: t("industry_contracting_desc"),
    },
    {
      title: t("industry_pharma_title"),
      icon: Pill,
      image: "/pharma.ser.png.jpeg",
      description: t("industry_pharma_desc"),
    },
    {
      title: t("industry_restaurants_title"),
      icon: UtensilsCrossed,
      image: "/resturant.png.png",
      description: t("industry_restaurants_desc"),
    },
    {
      title: t("industry_import_export_title"),
      icon: Ship,
      image: "/import.png.png",
      description: t("industry_import_export_desc"),
    },
  ];

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative h-[420px]">
        <Image
          src="/indust.hero.png"
          alt="Industries"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#051B36]/75" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="uppercase tracking-[5px] text-[#C9A14A] text-sm font-semibold">
              {t("industries_hero_badge")}
            </p>

            <h1 className="mt-6 text-5xl md:text-5xl font-bold">
              {t("industries_hero_title")}
            </h1>

            
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        {industries.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-20 items-center py-24 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={500}
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001B39]/15 to-transparent"></div>
              </div>

              {/* Content */}
              <div>
                <div className="w-16 h-16 rounded-full bg-[#F8F5EE] flex items-center justify-center shadow">
                  <Icon size={30} color="#B38B2D" strokeWidth={1.8} />
                </div>

                <h2 className="text-4xl font-bold text-[#082347] mt-8">
                  {item.title}
                </h2>

                <div className="w-20 h-1 bg-[#B38B2D] rounded-full my-6"></div>

                <p className="text-lg leading-9 text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-[#082347] py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="uppercase tracking-[4px] text-[#C9A14A] font-semibold">
            {t("industries_cta_badge")}
          </p>

          <h2 className="text-4xl font-bold text-white mt-6">
            {t("industries_cta_title")}
          </h2>
<p className="text-gray-300 mt-8 text-lg leading-8 max-w-3xl mx-auto">
            {t("industries_cta_text")}
          </p>

          <a
            href="/consultation"
            className="inline-block mt-10 bg-[#C9A14A] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#b38b2d] transition"
          >
            {t("industries_cta_button")}
          </a>
        </div>
      </section>
    </main>
  );
}