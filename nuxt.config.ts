// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "aktk1910.pw",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          hid: "description",
          name: "description",
          content: "home page",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  modules: ["@nuxtjs/robots", "@nuxtjs/sitemap"],
  typescript: { strict: true },
  nitro: { preset: "vercel" },
  devtools: { enabled: true },
});
