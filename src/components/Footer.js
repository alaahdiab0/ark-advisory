import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact Us", href: "/#contact" },
];

const serviceLinks = [
  { label: "Tax", href: "/tax" },
  { label: "Auditing", href: "/audit" },
  { label: "Financial Consulting", href: "/consulting" },
  { label: "Company Formation", href: "/formation" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12">
        {/* Brand */}
        <div className="lg:col-span-2 md:col-span-3">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="Ark Logo" width={44} height={44} className="brightness-0 invert rounded-lg" />
            <span className="text-xl font-extrabold text-white tracking-wide">ARK</span>
          </Link>
          <p className="text-white font-medium leading-relaxed text-[1.05rem]">
            Precision in Numbers,<br />Security in Decisions
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-bold text-lg mb-4 capitalize">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gray-400 hover:text-gold transition-colors text-[0.95rem]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-gold font-bold text-lg mb-4 capitalize">Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gray-400 hover:text-gold transition-colors text-[0.95rem]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-gold font-bold text-lg mb-4 capitalize">Contact Us</h4>
          <div className="space-y-3 text-gray-400 text-[0.95rem] mb-6">
            <p className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              +20 10 12510242
            </p>
            <p className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              info@ark-advisory.com
            </p>
          </div>
          <h4 className="text-gold font-bold text-lg mb-3 capitalize">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61591473336414&locale=ar_AR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors text-xl" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/135185222/admin/analytics/followers/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors text-xl" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; 2026 Ark Accounting & Tax Advisory. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
