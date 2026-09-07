import HomePageClient from './HomePageClient';

export const metadata = {
  title: 'ARK Accounting | Best Accounting Office in Egypt - أفضل مكتب محاسبة في مصر',
  description: 'ARK Accounting is a trusted accounting office in Egypt, offering professional accounting, audit, and tax consulting services in Cairo. مكتب محاسبة في مصر يقدم خدمات المحاسبة والمراجعة والاستشارات الضريبية.',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "ARK Accounting",
  "alternateName": "أفضل مكتب محاسبة في مصر",
  "image": "https://ark-accounting.org/hero.png.jpeg",
  "description": "ARK Accounting is a leading accounting office in Egypt, providing trusted accounting, audit, and tax services in Cairo and across Egypt.",
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