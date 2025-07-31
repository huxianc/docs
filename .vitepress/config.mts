import { defineConfig } from "vitepress";
// import vue from '@vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans",
  title: "Huxianc's Docs",
  description: "A VitePress Site",

  base: "/docs/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "BigQuant", link: "/bigquant/icons" },
      { text: "Vue3", link: "/vue3/useCreateReusableTemplate" },
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
            text: "hooks",
            items: [
              {
                text: "useCreateReusableTemplate",
                link: "/useCreateReusableTemplate",
              },
              {
                text: "useResettable",
                link: "/useResettable",
              },
            ],
          },
          {
            text: "tips",
            collapsed: true,
            items: [
              { text: "获取子组件的生命周期", link: "/get-child-hook" },
              { text: "组件二次封装", link: "/repackaging-components" },
            ],
          },

          {
            text: "components",
            items: [{ text: "HighlightText", link: "/HighlightText" }],
          },
        ],
      },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/huxianc/docs" }],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Huxianc`,
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    // skipToContentLabel: "跳转到内容",
  },
});
