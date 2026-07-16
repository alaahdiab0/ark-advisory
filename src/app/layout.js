import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Ark Advisory | Precision & Financial Security",
  description:
    "Ark offers integrated accounting and tax solutions designed to help businesses grow sustainably and comply with financial regulations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
          <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
