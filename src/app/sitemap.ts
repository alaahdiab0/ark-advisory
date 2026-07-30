export default function sitemap() {
  const baseUrl = "https://www.ark-accounting.org/"; // ضع الدومين الفعلي

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/industries`, lastModified: new Date() },
    { url: `${baseUrl}/consultation`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}