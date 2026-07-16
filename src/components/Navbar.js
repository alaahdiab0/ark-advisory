"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const services = [
    { label: "Audit", href: "/audit" },
  { label: "Tax", href: "/tax" },
  { label: "Financial Consulting", href: "/consulting" },
  { label: "Company Formation", href: "/formation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-white/80 backdrop-blur-xl border-b border-glass-border shadow-lg"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/#home" className="text-text-secondary font-semibold hover:text-gold transition-colors text-[1.05rem] capitalize">
            Home
          </Link>
          <Link href="/#about" className="text-text-secondary font-semibold hover:text-gold transition-colors text-[1.05rem] capitalize">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 text-text-secondary font-semibold hover:text-gold transition-colors text-[1.05rem] capitalize cursor-pointer"
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-glass-border rounded-lg shadow-xl min-w-[220px] py-2 z-50"
                >
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-5 py-2.5 text-text-secondary hover:bg-beige hover:text-gold transition-colors text-sm font-medium"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#industries" className="text-text-secondary font-semibold hover:text-gold transition-colors text-[1.05rem] capitalize">
            Industries
          </Link>
          <Link href="/consultation" className="text-text-secondary font-semibold hover:text-gold transition-colors text-[1.05rem] capitalize">
            Book Consultation
          </Link>
          <Link href="/#contact" className="text-text-secondary font-semibold hover:text-gold transition-colors text-[1.05rem] capitalize">
            Contact Us
          </Link>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/consultation"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold to-gold-hover text-navy font-bold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm"
          >
            Free Consultation
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-7 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className={`block h-0.5 w-full bg-navy rounded transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-full bg-navy rounded transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-navy rounded transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-glass-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {[
                { label: "Home", href: "/#home" },
                { label: "About Us", href: "/#about" },
                { label: "Industries", href: "/#industries" },
                { label: "Book Consultation", href: "/consultation" },
                { label: "Contact Us", href: "/#contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-navy font-semibold text-lg hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ))}
              <div className="border-t border-glass-border pt-4 mt-2">
                <p className="text-gold font-bold text-sm mb-3 uppercase tracking-wider">Services</p>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-text-secondary hover:text-gold transition-colors font-medium">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
