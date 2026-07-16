"use client";

import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaStore,
  FaPlane,
  FaIndustry,
  FaHardHat,
  FaPills,
  FaUtensils,
  FaGlobe,
} from "react-icons/fa";

const industries = [
  {
    title: "Trade & Retail",
    icon: <FaShoppingCart />,
    description:
      "The success of trade and retail businesses depends on accurately tracking inventory and sales, along with the speed at which financial data moves through the business — something we help our clients achieve by organizing their documentary cycle and aligning financial operations with tax and regulatory requirements.",
  },
  {
    title: "E-commerce",
    icon: <FaStore />,
    description:
      "E-commerce is characterized by multiple sales channels and varied collection methods, which calls for a tailored accounting system that keeps pace with this nature of business and allows for efficient tracking of financial performance.",
  },
  {
    title: "Tourism",
    icon: <FaPlane />,
    description:
      "The tourism sector sees a wide range of revenue sources and multiple currencies involved in transactions, which makes organizing accounts and maintaining tax compliance a matter that requires close and continuous attention.",
  },
  {
    title: "Manufacturing",
    icon: <FaIndustry />,
    description:
      "Industrial facilities rely on accurately calculating production costs and managing inventory to gain a clear financial picture — something we help organize for our clients in a way that reflects actual production costs and supports pricing and planning decisions.",
  },
  {
    title: "Contracting",
    icon: <FaHardHat />,
    description:
      "Contracting agreements require close monitoring of project milestones and progress billings, given their direct impact on revenue and cost recognition — a responsibility we take on in a way that fits the nature of each project.",
  },
  {
    title: "Pharmaceuticals",
    icon: <FaPills />,
    description:
      "The pharmaceutical sector demands close oversight of inventory movement and continuous data updates, given the nature of the products and the requirements involved — an area we help our clients manage in line with these requirements.",
  },
  {
    title: "Restaurants & Cafés",
    icon: <FaUtensils />,
    description:
      "Running a restaurant or café depends on accurately tracking daily sales and raw material inventory costs, alongside meeting the tax and regulatory requirements tied to the business — something we help owners in this sector organize in a way that reflects actual operating costs and supports accurate results and sound financial decisions.",
  },
  {
    title: "Import & Export",
    icon: <FaGlobe />,
    description:
      "The import and export sector requires precision in calculating customs duties and handling exchange rate fluctuations, alongside compliance with the tax and customs requirements tied to the cross-border movement of goods — something we help our clients organize in a way that supports the accuracy of their financial data and the clarity of their business results.",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-24 bg-gradient-to-b from-[#faf8f3] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-[#C8A74E] font-bold text-sm">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#10284d] mt-4">
            Tailored Solutions for Every Industry
          </h2>

          <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-lg leading-8">
            We understand that every industry has its own challenges and
            opportunities. That's why we deliver customized accounting,
            tax and advisory solutions that drive real business growth.
          </p>

        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                    {industries.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
          >
            <div className="w-14 h-14 rounded-full bg-[#f8f4ea] flex items-center justify-center text-[#C8A74E] text-2xl mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-[#10284d]">
              {item.title}
            </h3>

            <div className="w-12 h-[2px] bg-[#C8A74E] my-5"></div>

            <p className="text-gray-600 leading-8 text-[15px] flex-grow">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
}