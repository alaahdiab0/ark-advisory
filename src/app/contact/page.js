"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Headphones,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

export default function ContactPage() {
  const { t, language } = useLanguage();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f7e3addf-4d9a-488d-ae41-68ec31e745df",
          subject: "رسالة جديدة من فورم التواصل - ARK Accounting",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("idle");
        alert("حصل خطأ أثناء الإرسال، حاولي تاني");
      }
    } catch (error) {
      setStatus("idle");
      alert("حصل خطأ أثناء الإرسال، حاولي تاني");
    }
  };

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="bg-[#FBF6EC] py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* — العمود الأول: بيانات التواصل — */}
        <div className="lg:order-2">
          <h1 className="text-4xl font-bold text-[#1E2233]">
            {t("contact_title")}
          </h1>

          <p className="text-gray-600 leading-relaxed mt-6 max-w-md">
            {t("contact_intro")}
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 flex-shrink-0 rounded-full bg-[#D4A94F]/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#D4A94F]" />
              </span>
              <a
                href="https://wa.me/201012510242"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E2233] font-medium"
              >
                +20 10 12510242
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-10 h-10 flex-shrink-0 rounded-full bg-[#D4A94F]/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#D4A94F]" />
              </span>
              <a href="mailto:asmaa.abdelsalam@ark-accounting.org" className="text-[#1E2233] font-medium">
                asmaa.abdelsalam@ark-accounting.org
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-[#1E2233] mb-4">
              {t("contact_social_title")}
            </h3>
            <div className="flex items-center gap-4">
              {/* فيسبوك */}
              <a
                href="https://www.facebook.com/profile.php?id=61591473336414&locale=ar_AR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#D4A94F]/10 flex items-center justify-center hover:bg-[#D4A94F] transition-colors duration-300 group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-[#D4A94F] group-hover:fill-white transition-colors duration-300"
                >
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                </svg>
              </a>

              {/* لينكدإن */}
              <a
                href="https://www.linkedin.com/company/135185222/admin/analytics/followers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#D4A94F]/10 flex items-center justify-center hover:bg-[#D4A94F] transition-colors duration-300 group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-[#D4A94F] group-hover:fill-white transition-colors duration-300"
                >
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* — العمود الثاني: الفورم — */}
        <div className="lg:order-1">
          <h2 className="text-3xl font-bold text-[#1E2233]">
            {t("contact_form_title")}
          </h2>

          <p className="text-gray-600 mt-4 mb-8">
            {t("contact_form_subtitle")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#1E2233] font-medium mb-2">
                {t("contact_form_name")}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4A94F] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#1E2233] font-medium mb-2">
                {t("contact_form_email")}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4A94F] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#1E2233] font-medium mb-2">
                {t("contact_form_message")}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4A94F] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#D4A94F] text-white font-semibold px-10 py-3 rounded-full hover:bg-[#b38b2d] transition-colors disabled:opacity-60"
            >
              {status === "sending"
                ? t("contact_form_sending")
                : status === "sent"
                ? t("contact_form_sent")
                : t("contact_form_submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
