import {basename} from 'node:path'
import {defineConfig} from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import {head, nav, sidebar} from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: '烁烁南光',
  description: '南烁的资源导航平台，这是一个汇聚各类资源的学习网站',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    lineNumbers: true,
  },

  // 站点地图
  sitemap: {
    hostname: 'https://www.nanshuo.icu',
  },

  /* 主题配置 */
  themeConfig: {

    i18nRouting: false,

    // logo
    logo: '/logo.png',
    // 导航栏
    nav,
    // 侧边栏
    sidebar,

    // 页脚
    footer: {
      message:
        '<a target="_blank" href=\'https://beian.miit.gov.cn/\' style="text-decoration: none;">粤ICP备2024241400号</a>' +
        '<br/>' +
        '<span><img src="/beian.png" alt="公安备案" style="width: 18px;height: 18px;display: inline-block;vertical-align: middle; margin-right: 5px;"><a href="https://beian.mps.gov.cn/#/query/webSearch?code=44060702000428" style="text-decoration: none;" rel="noreferrer" target="_blank">粤公网安备44060702000428号</a></span>',
      copyright:
        'Copyright © 2024-today by <a target="_blank" href=\'https://www.nanshuo.icu/\' style="text-decoration: none;">南烁</a>',
    },

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '当前页大纲',
    },

    //本地搜索
    // search: {
    //   provider: 'local'
    // },

    //Algolia搜索
    search: {
      provider: 'algolia',
      options: {
        appId: 'JQSLTYCJ0C',
        apiKey: '87ad12e30f4f1c7b022f91a505d6c96a',
        indexName: 'nanshuo-website',
      },
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },

    // 社交链接
    socialLinks: [
      {icon: 'github', link: 'https://github.com/nanshuo0814'},
    ],

    // 在GitHub编辑文章链接
    editLink: {
      pattern: 'https://github.com/nanshuo0814/personal-vitepress-website/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'nanshuo0814.personal-vitepress-website',
    },

    comment: {
      repo: 'nanshuo0814/personal-vitepress-website',
      repoId: 'R_kgDOLx_Lkw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOLx_Lk84Ce4H_',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
