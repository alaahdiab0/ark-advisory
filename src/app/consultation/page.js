"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ConsultationForm from "@/components/ConsultationForm";
import { motion } from "framer-motion";

function ConsultationContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/22 rounded-full text-gold text-xs font-bold mb-4">
          <span className="w-2.5 h-2.5 bg-gold rounded-full shadow-[0_0_6px_var(--color-gold)] animate-pulse" />
          100% Free · No Commitment Required
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-4">
          Free <span className="gold-gradient-text">Consultation</span> Form
        </h1>
        <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
          Tell us about your business and financial needs. Our certified advisors will review your details and get back to you within <strong>24 hours</strong>.
        </p>
      </div>

      <ConsultationForm preselect={serviceParam} />
    </div>
  );
}

export default function ConsultationPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-beige-glow to-beige">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gold"></div>
        </div>
      }>
        <ConsultationContent />
      </Suspense>
    </div>
  );
}
