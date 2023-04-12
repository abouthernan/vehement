/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  routes: {
    en: {
      servicios: {
        index: "services",
        ciberseguridad: "cybersecurity",
        desarrollo: "develop",
        diseno: "design",
        marketing: "marketing",
        seo: "seo"
      }
    }
  }
};
