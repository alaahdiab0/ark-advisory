

"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-[#082347] mb-8">{t("terms_title")}</h1>
      <p className="text-gray-500 mb-10">{t("terms_updated")}</p>

      <div className="space-y-8 text-gray-600 leading-8 text-lg">
        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("terms_intro_title")}</h2>
          <p>
            {t("terms_intro_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("terms_services_title")}</h2>
          <p>
            {t("terms_services_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("terms_usage_title")}</h2>
          <p>
            {t("terms_usage_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("terms_booking_title")}</h2>
          <p>
            {t("terms_booking_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("terms_ip_title")}</h2>
          <p>
            {t("terms_ip_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("terms_liability_title")}</h2>
          <p>
            {t("terms_liability_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("terms_changes_title")}</h2>
          <p>
            {t("terms_changes_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("terms_contact_title")}</h2>
          <p>
            {t("terms_contact_text")}
           
          </p>
          <a href="mailto:info@ark-accounting.org" className="text-[#C9A14A] font-semibold">
              asmaa.abdelsalam@ark-accounting.org
            </a>.
        </section>
      </div>
    </main>
  );
}