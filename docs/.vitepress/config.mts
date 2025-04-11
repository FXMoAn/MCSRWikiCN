import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mcsr-wiki-cn",
  description: "一个国内我的世界速通的wiki网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "在本页中可以找到",
    outline: [2, 6],
    nav: [
      { text: '主页', link: '/' },
      { text: '新手入门', link: '/guide/quickstart/index' },
      { text: '资源中心', link: '/resources/index' },
      { text: '贡献', link: '/contribute/writeMarkdown'}
    ],

    sidebar: {
      "/guide": [
        {
          text: '快速开始',
          collapsed: false,
          base: '/guide/quickstart',
          items: [
            { text: "测试", link: "/" }
          ]
        },
        {
          text: '如何开局',
          collapsed: false,
          base: '/guide/overworld',
          items: [
            { text: "测试", link: "/api-examples" }
          ]
        }
      ],

      "/resources": [
        { text: "资源", link: "/resources/index" }
      ],

      "/contribute": [
        {
          text: "流程",
          collapsed: false,
          base: '/contribute',
          items: [
            { text: "如何写markdown", link: "/writeMarkdown" },
            { text: "如何上传你的文章", link: "/upload" }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/420966870' }
    ],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          },
          modal: {
            noResultsText: "找不到结果",
            resetButtonTitle: "清除条件",
            footer: {
              selectText: "选择",
              navigateText: "切换"
            }
          }
        }
      }
    }
  }
})
