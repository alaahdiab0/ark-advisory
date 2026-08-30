"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const serviceOptions = [
  { value: "tax", labelKey: "service_tax" },
  { value: "audit", labelKey: "service_audit" },
  { value: "consulting", labelKey: "service_consulting" },
  { value: "formation", labelKey: "service_formation" },
];

// تحقق من رقم الموبايل المصري: يبدأ بـ 010 أو 011 أو 012 أو 015 ويتكون من 11 رقم
const validateEgyptPhone = (phone) => {
  // شيل المسافات والشرطات، ولو موجود قوس بيني على الكود (+20) شيله برضو
  let cleaned = phone.replace(/[\s()-]/g, "");

  // لو الرقم مكتوب بصيغة دولية +20 أو 0020، حوّله للصيغة المحلية (يبدأ بـ 0)
  if (cleaned.startsWith("+20")) {
    cleaned = "0" + cleaned.slice(3);
  } else if (cleaned.startsWith("0020")) {
    cleaned = "0" + cleaned.slice(4);
  } else if (cleaned.startsWith("20") && cleaned.length === 12) {
    // حالة زي 201028406679 من غير + أو 00
    cleaned = "0" + cleaned.slice(2);
  }

  const egyptPhoneRegex = /^01[0125][0-9]{8}$/;
  return egyptPhoneRegex.test(cleaned);
};

export default function ConsultationForm({ preselect = "" }) {
  const { t, lang } = useLanguage();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", company: "",
    service: preselect || "", message: "",
  });
  const [status, setStatus] = useState(null); // 'loading' | 'error'
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "phone" && phoneError) {
      setPhoneError(""); // امسح رسالة الخطأ أول ما يبدأ يعدّل الرقم
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // بنستخدم FormData API بدل الوصول المباشر بالاسم (form.name.value)
    // عشان "name" بتتعارض مع property أصلية في HTMLFormElement نفسه،
    // وده كان بيسبب فشل صامت في السبمشن (خصوصاً مع autofill على الموبايل).
    const fd = new FormData(e.target);
    const liveData = {
      name: (fd.get("name") || "").trim(),
      phone: (fd.get("phone") || "").trim(),
      email: (fd.get("email") || "").trim(),
      company: (fd.get("company") || "").trim(),
      service: fd.get("service") || "",
      message: (fd.get("message") || "").trim(),
    };

    if (!liveData.name || !liveData.phone || !liveData.email || !liveData.service) {
      setStatus("error");
      return;
    }

    // تحقق من رقم الموبايل قبل أي إرسال
    if (!validateEgyptPhone(liveData.phone)) {
      setPhoneError(
        t("form_phone_invalid") ||
          "من فضلك أدخل رقم موبايل مصري صحيح (يبدأ بـ 010 أو 011 أو 012 أو 015 ويتكون من 11 رقم)"
      );
      return;
    }
    setPhoneError("");

    setStatus("loading");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...liveData,
          from_name: "ARK Accounting",
        }),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-glass-border rounded-2xl p-8 md:p-10 shadow-xl"
    >
      <h3 className="text-2xl font-extrabold text-navy mb-2">{t("consultation_form_title")}</h3>
      <p className="text-text-secondary mb-8">{t("consultation_form_note")}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">
              {t("form_name")} <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t("form_name_placeholder")}
              className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy placeholder-text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">
              {t("form_phone")} <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder={t("form_phone_placeholder")}
              className={`w-full px-4 py-3 bg-beige border rounded-lg text-navy placeholder-text-muted focus:ring-2 outline-none transition-all text-sm ${
                phoneError
                  ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                  : "border-glass-border focus:border-gold focus:ring-gold/20"
              }`}
            />
            {phoneError && (
              <p className="mt-1.5 text-xs font-semibold text-red-600">{phoneError}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">
              {t("form_email")} <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t("form_email_placeholder")}
              className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy placeholder-text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">
              {t("form_company")}
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t("form_company_placeholder")}
              className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy placeholder-text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-navy mb-1.5">
            {t("form_service")} <span className="text-gold">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23C9A227' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: lang === "ar" ? "left 14px center" : "right 14px center",
            }}
          >
            <option value="" disabled>{t("form_service_placeholder")}</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>{t(o.labelKey)}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-navy mb-1.5">
            {t("form_message")}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder={t("form_message_placeholder")}
            className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy placeholder-text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-hover text-navy font-extrabold rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all text-base flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              {t("form_submitting")}
            </>
          ) : (
            <>
              {t("form_submit")}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </>
          )}
        </button>
      </form>

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-semibold text-center"
        >
          ✗ {t("form_error")}
        </motion.div>
      )}
    </motion.div>
  );
}
