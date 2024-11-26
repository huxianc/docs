import { defineConfig } from "vitepress";
// import vue from '@vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Huxianc's Docs",
  description: "A VitePress Site",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "BigQuant", link: "/bigquant/icons" },
      { text: "Vue3", link: "/vue3/tips" },
    ],

    sidebar: {
      "/bigquant": {
        base: "/bigquant/",
        items: [
          {
            text: "lib",
            items: [{ text: "Icons", link: "/icons" }],
          },
        ],
      },

      "/vue3": {
        base: "/vue3/",
        items: [
          {
            text: "tips",
            items: [{ text: "tips", link: "/tips" }],
          },
        ],
      },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/huxianc/docs" }],
  },
  // vite:{
  //   plugins
  // }
});
