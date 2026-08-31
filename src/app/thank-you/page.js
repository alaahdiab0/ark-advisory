"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ThankYouPage() {
  const { t, lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen flex flex-col items-center justify-center bg-cream text-white px-4"
    >
    
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-[#D4A94F] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {isArabic ? (
          <>
            <h1 className=" text-navy text-3xl font-bold mb-3">تم استلام رسالتك بنجاح</h1>
            <p className="text-navy mb-8">
              شكراً لتواصلك مع Ark Accounting، هيتم الرد عليك في أقرب وقت.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-navy text-3xl font-bold mb-3">Thank You for Reaching Out</h1>
            <p className="text-navy mb-8">
              We've received your message. Our team at Ark Accounting will get back to you shortly.
            </p>
          </>
        )}

        <Link
          href="/"
           className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold to-gold-hover text-navy font-bold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm"
        >
          {isArabic ? "العودة للصفحة الرئيسية" : "Back to Home"}
        </Link>
      </div>
    </div>
  );
}