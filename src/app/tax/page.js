"use client";
import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";

const items = [
  {
    title: "E-Invoicing",
    desc: "E-invoicing is a system introduced by the Egyptian Tax Authority, which applicable entities are required to comply with in accordance with the relevant rules and decisions, with the aim of documenting sales transactions and issuing invoices electronically, linked directly to the Egyptian Tax Authority.",
    services: [
      "Preparing the company's file and obtaining the required token from the relevant authority",
      "Registering the company on the e-invoicing system",
      "Coding the company's goods and services in line with the system's requirements",
      "Ongoing monitoring of invoice status, and resolving any pending or rejected invoices as they arise",
    ],
  },
  {
    title: "Tax Returns",
    desc: "Tax compliance depends on submitting the return by the specified deadline and with accurate figures, making this one of the most fundamental requirements of tax compliance.",
    services: [
      "Preparing and reviewing the tax return before submission",
      "Verifying the correct classification of each transaction (taxable or exempt)",
      "Tracking the filing deadlines for each type of return",
      "Assessing the need for an amended return in line with the law and applicable procedures",
    ],
  },
  {
    title: "Payroll Tax and Social Insurance",
    desc: "Payroll tax and social insurance contributions represent an ongoing monthly obligation, requiring precision in calculation and strict adherence to statutory deadlines.",
    services: [
      "Calculating the payroll tax due on each employee accurately",
      "Preparing and submitting social insurance filings on time",
      "Updating employment and salary records whenever changes occur",
      "Reviewing the insurance position and addressing any discrepancies as they arise",
    ],
  },
  {
    title: "Real Estate Tax",
    desc: "Handling real estate tax requires a precise understanding of the valuation and assessment principles involved, as it is one of the taxes imposed on qualifying real estate under the law.",
    services: [
      "Reviewing the valuation basis and verifying its accuracy",
      "Calculating the tax due based on the approved valuation",
      "Following up on registration and assessment procedures with the relevant authorities",
      "Preparing and handling appeal and objection procedures when necessary",
    ],
  },
  {
    title: "Tax Audit and Representation Before the Tax Authority",
    desc: "When a company is notified of a tax audit, the Tax Authority undertakes procedures to verify the accuracy of the returns filed and the tax obligations met.",
    services: [
      "Preparing the documents and supporting evidence for the company's tax position",
      "Representing the company before the tax office throughout the audit and discussion process",
      "Responding to any queries or observations raised by the tax auditor",
      "Following the audit process through to final assessment in accordance with legal procedures",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function TaxPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[380px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/tax.Ser.png.jpeg')` }}
      >
        <div className="absolute inset-0 bg-navy/65 z-10" />
        <h1 className="relative z-20 text-white font-extrabold text-4xl md:text-5xl lg:text-6xl text-center tracking-wide">
          Tax Services
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
            <h2 className="text-3xl font-extrabold text-navy">Connect with an Advisor</h2>
            <p className="text-text-secondary mt-2">Fill out the form below to request a consultation on our Tax services.</p>
          </div>
          <ConsultationForm preselect="tax" />
        </div>
      </section>
    </div>
  );
}
