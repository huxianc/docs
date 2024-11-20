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
      // { text: 'Examples', link: '/markdown-examples' },
      { text: "Icons", link: "/icons" },
    ],

    sidebar: [
      {
        text: "BigQuant",
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: "Icons", link: "/icons" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  // vite:{
  //   plugins
  // }
});
