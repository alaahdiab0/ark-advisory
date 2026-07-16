"use client";

import IndustriesSection from "@/components/IndustriesSection";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function HomePage() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/201012510242"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
      {/* ── HERO SECTION ── */}
      <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.png.jpeg" alt="Ark Advisory" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy/60" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gold/15 border border-gold/25 rounded-full text-gold text-sm font-bold mb-6">
                <span className="w-2 h-2 bg-gold rounded-full shadow-[0_0_8px_var(--color-gold)]" />
                Ark Advisory Office
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
  Precise Numbers
  <br />
  <span className="gold-gradient-text">Trusted Decisions</span>
</h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                Empowering businesses with cutting-edge accounting, tax, and financial advisory services across all industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/consultation" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold to-gold-hover text-navy font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Book Free Consultation
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/#about" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-gold hover:text-gold transition-all">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY US SECTION ── */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <span className="text-gold font-bold text-sm uppercase tracking-wider">Why Ark?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2">What Sets Our Advisory Apart</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
            <p
              className="text-text-secondary mt-6 max-w-5xl mx-auto px-6 leading-8 text-lg"
              style={{ textAlign: "justify" }}
            >
              ARK Accounting is an accounting and auditing firm providing professional services in accounting, auditing, taxation, and financial consulting, in accordance with applicable professional standards and regulations.
              We see the quality of financial information as the foundation on which sound decisions are built. That's why, on every engagement we take on, we make sure our work is precise, and that we genuinely understand the nature of the client's business before offering any opinion or report.
              This understanding is what sets our work apart, and what makes our services a real aid to business owners in the decisions they make every day.
            </p>
          </motion.div>
        </div>
      </section>

      <IndustriesSection />

    </>
  );
}