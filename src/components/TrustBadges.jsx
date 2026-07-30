"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const icons = {
  secure: (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
    </svg>
  ),
  response: (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
    </svg>
  ),
  free: (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 1.4-2.5 2-2.5 3.5M12 16.5h.01" />
    </svg>
  ),
};

const items = [
  { key: "secure", icon: icons.secure },
  { key: "response", icon: icons.response },
  { key: "free", icon: icons.free },
];

export default function TrustBadges() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {items.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            
            
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
