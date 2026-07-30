"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ConsultationHero from "../../components/ConsultationHero";
import TrustBadges from "../../components/TrustBadges";
import ConsultationForm from "../../components/ConsultationForm";
import FAQSection from "../../components/FAQSection";

function ConsultationContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <ConsultationForm preselect={serviceParam} />
    </div>
  );
}

export default function ConsultationPage() {
  const { t } = useLanguage();
  return (
    <>
      <ConsultationHero />
      <TrustBadges />

      <div className="bg-gradient-to-b from-beige-glow to-beige">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gold" />
            </div>
          }
        >
          <ConsultationContent />
        </Suspense>
      </div>

      <FAQSection />
    </>
  );
}