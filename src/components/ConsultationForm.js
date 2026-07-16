"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const serviceOptions = [
  { value: "tax", label: "Tax" },
  { value: "audit", label: "Auditing" },
  { value: "consulting", label: "Financial Consulting" },
  { value: "formation", label: "Company Formation" },
];

export default function ConsultationForm({ preselect = "" }) {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", company: "",
    service: preselect || "", message: "",
  });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", company: "", service: preselect || "", message: "" });
      setTimeout(() => setStatus(null), 8000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-glass-border rounded-2xl p-8 md:p-10 shadow-xl"
    >
      <h3 className="text-2xl font-extrabold text-navy mb-2">Request a Consultation</h3>
      <p className="text-text-secondary mb-8">We will review your details and get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">Your Name <span className="text-gold">*</span></label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy placeholder-text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">Phone Number <span className="text-gold">*</span></label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
              placeholder="+20 1x xxxx xxxx"
              className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy placeholder-text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">Email Address <span className="text-gold">*</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy placeholder-text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy mb-1.5">Company Name</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange}
              placeholder="Name of your business"
              className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy placeholder-text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-navy mb-1.5">Required Service <span className="text-gold">*</span></label>
          <select name="service" value={formData.service} onChange={handleChange} required
            className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23C9A227' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-navy mb-1.5">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
            placeholder="Briefly describe your business needs..."
            className="w-full px-4 py-3 bg-beige border border-glass-border rounded-lg text-navy placeholder-text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm resize-y" />
        </div>

        <button type="submit" disabled={status === "loading"}
          className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-hover text-navy font-extrabold rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all text-base flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
          {status === "loading" ? (
            <><svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg> Submitting...</>
          ) : (
            <>Submit Request <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></>
          )}
        </button>
      </form>

      {status === "success" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-5 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-semibold text-center">
          ✓ Thank you! Your consultation has been booked. We&apos;ll contact you within 24 hours.
        </motion.div>
      )}
      {status === "error" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-5 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-semibold text-center">
          ✗ Please fill in all required fields.
        </motion.div>
      )}
    </motion.div>
  );
}
