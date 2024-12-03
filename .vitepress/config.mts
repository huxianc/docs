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

      "/huxianc-utils": {
        base: "/huxianc-utils/",
        items: [
          {
            base: "/huxianc-utils/number/",
            items: [
              {
                text: "Number",
                items: [{ text: "formatNumberWithSeparator", link: "/formatNumberWithSeparator" }],
              },
            ],
          },
          {
            base: "/huxianc-utils/color/",
            items: [
              {
                text: "Color",
                items: [{ text: "hex2rgba", link: "/hex2rgba" }],
              },
            ],
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
});
