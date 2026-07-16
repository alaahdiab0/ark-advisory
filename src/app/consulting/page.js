"use client";
import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";

const items = [
  {
    title: "Financial Performance Analysis",
    desc: "It is not enough for a company to know the size of its profits at the end of the period; what matters more is understanding the sources behind those profits, the factors that contributed to them, and the areas of spending that consumed resources without generating a proportionate return.",
    services: [
      "Analyzing revenues and costs across the business as a whole",
      "Assessing the profitability of each product or service individually, to identify what contributes most to overall performance",
      "Comparing actual performance against approved budgets and analyzing the causes of material variances",
    ],
  },
  {
    title: "Cash Flow and Liquidity Analysis",
    desc: "A company may report solid accounting profits while, at the same time, facing real pressure on its cash position due to delayed collections or slow-moving inventory — which calls for monitoring that goes beyond profitability figures alone.",
    services: [
      "Preparing cash flow statements and monitoring actual liquidity movement",
      "Identifying sources of cash flow pressure, whether from collections, inventory, or short-term liabilities",
      "Providing practical recommendations to improve working capital management",
    ],
  },
  {
    title: "Supporting Expansion and Investment Decisions",
    desc: "Any decision to expand or invest requires prior assessment of its financial impact on the company, as growth without clear financial planning can lead to financial or operational strain that could have been mitigated through early planning.",
    services: [
      "Preparing financial feasibility studies for expansion decisions or new business lines",
      "Estimating the financing required for expansion projects",
      "Analyzing the expected impact of expansion on liquidity and profitability during the transition period",
    ],
  },
  {
    title: "Budgeting",
    desc: "Budgeting is not limited to estimating expected revenues and expenses; it serves as a tool that helps management with financial planning, performance monitoring, and decision-making against clear, measurable objectives.",
    services: [
      "Preparing the annual budget based on prior actual performance data",
      "Tracking actual performance against budget on a periodic basis, helping management monitor performance and take corrective decisions in a timely manner",
      "Updating the budget when material changes occur in the company's operations",
    ],
  },
  {
    title: "Financial KPIs",
    desc: "Measuring financial performance through specific indicators helps management form a clearer picture of the company's operational efficiency, moving beyond aggregate figures to more meaningful performance details.",
    services: [
      "Analyzing profit margins at the business or product level",
      "Calculating inventory turnover and assessing its management efficiency",
      "Measuring the average collection period from customers",
      "Analyzing liquidity and leverage ratios and tracking their development over time",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function ConsultingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[380px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/consult.ser.png.jpeg')` }}
      >
        <div className="absolute inset-0 bg-navy/65 z-10" />
        <h1 className="relative z-20 text-white font-extrabold text-4xl md:text-5xl lg:text-6xl text-center tracking-wide">
          Financial Consulting
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
            <h2 className="text-3xl font-extrabold text-navy">Connect with a Consultant</h2>
            <p className="text-text-secondary mt-2">Fill out the form below to request a consultation on our Financial Consulting services.</p>
          </div>
          <ConsultationForm preselect="consulting" />
        </div>
      </section>
    </div>
  );
}
