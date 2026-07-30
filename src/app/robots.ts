export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.ark-accounting.org/sitemap.xml",
  };
}