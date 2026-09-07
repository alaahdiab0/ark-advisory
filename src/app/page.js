import HomePageClient from './HomePageClient';

export const metadata = {
  title: 'ARK Accounting | Accounting & Audit Firm in Cairo, Egypt',
  description: 'ARK Accounting provides trusted accounting, audit, and tax consulting services for businesses in Cairo and across Egypt.',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "ARK Accounting",
  "image": "https://ark-accounting.org/hero.png.jpeg",
  "description": "ARK Accounting provides trusted accounting, audit, and tax consulting services for businesses in Cairo and across Egypt.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cairo",
    "addressCountry": "EG"
  },
  "url": "https://ark-accounting.org",
  "telephone": "+20 10 1251 0242",
  "priceRange": "EGP 1000 - EGP 10000",
  "areaServed": "Egypt",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61591473336414",
    "https://www.linkedin.com/company/135185222"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}