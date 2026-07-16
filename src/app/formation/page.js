"use client";
import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";

const items = [
  {
    title: "Choosing the Appropriate Legal Form",
    desc: "Choosing a company's legal form goes beyond simply meeting formation requirements — it shapes how the company is managed and defines its legal and tax obligations from day one. The most suitable choice varies depending on the nature of the business, the number of partners, and future growth plans.",
    services: [
      "Explaining the advantages and obligations associated with each legal form, to help the client make the right decision",
      "Clarifying capital requirements — where applicable — based on the chosen legal form and its governing regulations",
      "Studying the nature of the intended business activity and determining the most suitable legal form for it",
    ],
  },
  {
    title: "Preparing Formation Documents and Contracts",
    desc: "Company formation requires preparing a set of legal documents that define the company's structure and the rights and obligations of its partners, helping to reduce the likelihood of future disputes between them.",
    services: [
      "Preparing the company's articles of incorporation and bylaws",
      "Drafting or reviewing partner agreements to clarify each party's rights and obligations, along with management arrangements and procedures for transferring shares when needed",
      "Reviewing the legal documents required from partners prior to submission",
    ],
  },
  {
    title: "Registration With the Relevant Authorities",
    desc: "Company formation requires completing registration procedures with the relevant authorities in accordance with the law, enabling the company to commence operations on a proper legal footing.",
    services: [
      "Obtaining the company's commercial registration",
      "Obtaining the tax card and completing the required tax registrations",
      "Completing the official gazette publication procedures, where applicable",
    ],
  },
  {
    title: "Post-Formation Procedures",
    desc: "Once formation procedures are complete, the company needs to take a number of additional steps before it can properly begin operating.",
    services: [
      "Assisting with opening the company's bank account",
      "Registering the company with the relevant social insurance office",
      "Completing the necessary licenses and permits based on the nature of the business, where required",
    ],
  },
  {
    title: "Amending Company Records",
    desc: "Over the course of their operations, companies often need to make various changes to their formation or administrative records — changes that require completing official procedures with the relevant authorities to take legal effect.",
    services: [
      "Amending the articles of incorporation and company bylaws",
      "Procedures for increasing or reducing share capital",
      "Registering the entry or exit of a partner",
      "Changing the company's manager or legal representative",
      "Amending the company's business activity or head office address",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function FormationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[380px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/form.ser.png.jpeg')" }}
      >
        <div className="absolute inset-0 bg-navy/65 z-10" />
        <h1 className="relative z-20 text-white font-extrabold text-4xl md:text-5xl lg:text-6xl text-center tracking-wide">
          Company Formation
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
            <h2 className="text-3xl font-extrabold text-navy">Start Your Company Formation</h2>
            <p className="text-text-secondary mt-2">Fill out the form below to request a consultation on our Company Formation services.</p>
          </div>
          <ConsultationForm preselect="formation" />
        </div>
      </section>
    </div>
  );
}
