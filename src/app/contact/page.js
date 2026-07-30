"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-navy font-bold text-4xl mb-12 text-center capitalize">
          {t("footer_contact_title")}
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Email + Phone */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            
            <p className=" text-text-secondary flex items-center gap-3 text-gray-300 text-lg">
              <svg className="w-6 h-6 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              <span dir="ltr">{t("footer_phone")}</span>
            </p>
            
            <div className="space-y-2 text-gray-600"></div>
            <p className="text-text-secondary flex items-center gap-3 text-gray-300 text-lg">
              <svg className="w-6 h-6 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <p dir="ltr" className="text-right">{t("footer_email")}</p>
            </p>
          </div>

          {/* Card 2: Social Media */}
           <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h4 className="text-text-secondary text-gold font-bold text-xl capitalize">{t("footer_follow_title")}</h4>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=61591473336414&locale=ar_AR" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-all duration-300 hover:scale-125 inline-block" aria-label="Facebook">
                <svg className=" text-text-secondary w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/135185222/admin/analytics/followers/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-all duration-300 hover:scale-125 inline-block" aria-label="LinkedIn">
                <svg className=" text-text-secondary w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

