import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的世界速通wiki",
  description: "一个我的世界速通的中文wiki网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "在本页中可以找到",
    outline: [2, 6],
    nav: [
      { text: '主页', link: '/' },
      { text: '新手入门', link: '/guide/quickstart/BasicRules' },
      { text: '进阶技巧', link: '/advanced/rules/SubmitRules' },
      { text: '资源中心', link: '/resources/index' },
      { text: '贡献', link: '/contribute/WriteMarkdown' }
    ],

    sidebar: {
      // 以下为新手教程区域侧边栏
      "/guide": [
        {
          text: '快速开始',
          collapsed: false,
          base: '/guide/quickstart',
          items: [
            { text: "基本规则", link: "/BasicRules" }
          ]
        },
        {
          text: '开局部分',
          collapsed: false,
          base: '/guide/overworld',
          items: [
            { text: "村庄和神殿开局", link: "/Village&Temple" },
            { text: "沉船和宝藏开局", link: "/Shipwreck&Treasure" }
          ]
        },
        {
          text: '下界部分',
          collapsed: false,
          base: '/guide/nether',
          items: [
            { text: "找下界要塞", link: "/FindFortress" }
          ]
        },
        {
          text: '主世界第二部分',
          collapsed: false,
          base: '/guide/overworld2',
          items: [
            { text: "测眼与找要塞", link: "/EyeMeasuring" },
            { text: "找传送门房间", link: "/FindPortalRoom" }
          ]
        },
        {
          text: '末地部分',
          collapsed: false,
          base: '/guide/end',
          items: [
            { text: "末地战", link: "/EndFight" }
          ]
        }
      ],
      // 以下为进阶技巧区域侧边栏
      "/advanced": [
        {
          text: '规则',
          collapsed: false,
          base: '/advanced/rules',
          items: [
            { text: '如何提交成绩', link: '/SubmitRules' },
            { text: 'RSG合法模组列表', link: '/LegalMods' }
          ]
        }
      ],
      // 以下为资源区域侧边栏
      "/resources": [
        {
          text: "资源大全",
          collapsed: false,
          base: "/resources",
          items: [
            { text: "资源", link: "/" }
          ]
        }
      ],
      // 以下为贡献区域区域侧边栏
      "/contribute": [
        {
          text: "流程",
          collapsed: false,
          base: '/contribute',
          items: [
            { text: "上传格式和命名规范", link: "/Format" },
            { text: "如何写Markdown", link: "/WriteMarkdown" },
            { text: "如何上传你的文章", link: "/Upload" },
            
          ]
        }
      ]
    },
    // 社交媒体链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FXMoAn/MCSRWikiCN' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/420966870' },
      { icon: 'qq', link: 'https://qm.qq.com/q/MGNZB5nF6'}
    ],
    // 启用搜索功能
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
              navigateText: "切换",
              closeText: "关闭"
            }
          }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/FXMoAn/MCSRWikiCN/edit/main/docs/:path',
      text: '编辑此页面'
    }
  },
  lastUpdated: true,
  cleanUrls: true
})
