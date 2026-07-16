"use client";
import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";

const items = [
  {
    title: "Annual Financial Statements Audit",
    desc: "The audit of financial statements aims to express an independent professional opinion on whether they present fairly, in all material respects, the financial position and results of operations of the entity, in accordance with the Egyptian Auditing Standards.",
    services: [
      "Studying the nature of the client's business and its documentary cycle before commencing audit procedures",
      "Verifying material balances and transactions through appropriate audit procedures, including confirmations and examination of supporting documents",
      "Verifying that the financial statements are prepared in accordance with the Egyptian Accounting Standards",
      "Preparing the final audit report, incorporating the professional opinion on the financial statements",
    ],
  },
  {
    title: "Internal Control Assessment",
    desc: "An effective internal control system contributes to enhancing the reliability of financial information and reducing the risk of errors or irregularities.",
    services: [
      "Assessing the adequacy of internal control procedures applied to the documentary cycle",
      "Identifying weaknesses in financial and operational procedures",
      "Testing actual compliance with approved policies and procedures",
      "Providing recommendations to strengthen the internal control system in line with the scale of operations",
    ],
  },
  {
    title: "Internal Audit",
    desc: "Internal audit is an independent activity aimed at evaluating and improving the efficiency of operations, the effectiveness of internal controls, and risk management, thereby supporting management in achieving the entity's objectives.",
    services: [
      "Preparing a periodic internal audit plan tailored to the nature of the client's business",
      "Reviewing operations and financial transactions on an ongoing basis throughout the financial period",
      "Reporting audit findings and observations to management in a timely manner",
      "Following up on the implementation of recommendations issued in previous audit reports",
    ],
  },
  {
    title: "Special-Purpose Audits",
    desc: "Some entities may require an audit for a specific purpose, such as submitting financial statements to a financing party, for acquisition purposes, or at the request of a party with specific requirements.",
    services: [
      "Designing audit procedures appropriate to the nature and purpose of the engagement",
      "Preparing an audit report that meets the requesting party's requirements",
      "Reviewing financial data for partial periods of the year when required",
      "Providing the necessary technical support during Due Diligence procedures",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function AuditPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[380px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/audit.ser.png.jpeg')` }}
      >
        <div className="absolute inset-0 bg-navy/65 z-10" />
        <h1 className="relative z-20 text-white font-extrabold text-4xl md:text-5xl lg:text-6xl text-center tracking-wide">
          Auditing Services
        </h1>
      </section>

      {/* Details Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-white border border-glass-border rounded-2xl p-8 shadow-md mb-6"
            >
              <h2 className="text-2xl font-extrabold text-navy mb-3">{item.title}</h2>
              <p className="text-text-secondary leading-relaxed mb-6">{item.desc}</p>
              <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-3">Our Services Include:</h4>
              <ul className="space-y-3.5">
                {item.services.map((srv, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-secondary text-[0.95rem] leading-relaxed">
                    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {srv}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-12 md:py-16 bg-beige-edges/40 border-t border-glass-border">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-navy">Connect with an Auditor</h2>
            <p className="text-text-secondary mt-2">Fill out the form below to request a consultation on our Auditing & Assurance services.</p>
          </div>
          <ConsultationForm preselect="audit" />
        </div>
      </section>
    </div>
  );
}
