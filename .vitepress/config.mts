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
            text: "Number",
            items: [
              {
                text: "formatNumberWithSeparator",
                link: "/number/formatNumberWithSeparator",
              },
              {
                text: "storage",
                link: "/number/storage",
              },
            ],
          },
          {
            text: "Color",
            items: [{ text: "all", link: "/color/all" }],
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
          {
            text: "hooks",
            items: [
              { text: "useCreateReusableTemplate", link: "/useCreateReusableTemplate" },
              { text: "useResettable", link: "/useResettable" },
            ],
          },
        ],
      },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/huxianc/docs" }],
  },
});
