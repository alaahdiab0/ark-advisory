



import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../context/LanguageContext";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata = {
  title: "ARK Accounting | Accounting, Audit & Tax Advisory in Egypt",
  description:
    "ARK Accounting provides accounting, auditing, tax, and financial consulting services across diverse industries in Egypt — precision in numbers, security in decisions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <FloatingWhatsApp />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}