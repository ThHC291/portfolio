/** @type {import('next').NextConfig} */
module.exports = {
  darkMode: 'class',
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: ["en", "pt"],
    defaultLocale: "en",
    // domains: [
    //   {
    //     domain: "website.com",
    //     defaultLocale: "en",
    //   },
    //   {
    //     domain: "website.com.br",
    //     defaultLocale: "pt",
    //   },
    // ],
  },
}
