"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-[#082347] mb-8">{t("privacy_title")}</h1>
      <p className="text-gray-500 mb-10">{t("privacy_updated")}</p>

      <div className="space-y-8 text-gray-600 leading-8 text-lg">
        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("privacy_intro_title")}</h2>
          <p>
            {t("privacy_intro_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("privacy_collect_title")}</h2>
          <p>
            {t("privacy_collect_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("privacy_use_title")}</h2>
          <p>
            {t("privacy_use_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("privacy_storage_title")}</h2>
          <p>
            {t("privacy_storage_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("privacy_rights_title")}</h2>
          <p>
            {t("privacy_rights_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("privacy_cookies_title")}</h2>
          <p>
            {t("privacy_cookies_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("privacy_changes_title")}</h2>
          <p>
            {t("privacy_changes_text")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#082347] mb-3">{t("privacy_contact_title")}</h2>
          <p>
            {t("privacy_contact_text")}{" "}
            <a href="mailto:info@ark-advisory.com" className="text-[#C9A14A] font-semibold">
              asmaa.abdelsalam@ark-accounting.org
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}