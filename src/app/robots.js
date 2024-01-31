export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      allow: "/aboutus",
      allow: "/admissionguide",
      allow: "/biruniversity",
      allow: "/contact",
      allow: "/gallary",
      allow: "/satyami",
      allow: "/satyamlaw",
      disallow: "/private/",
    },
    sitemap: "https://prakashacademy.net/sitemap.xml",
  };
}
