import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: '快速开始',
    link: '/quick-start/'
  },
  {
    text: '关于站长',
    link: '/about/'
  },
  {
    text: '开发导航',
    collapsed: false,
    items: [
      {
        text: 'AI工具',
        link: '/nav/ai-utils'
      },
      {
        text: '前端',
        link: '/nav/frontend'
      },
      {
        text: '后端',
        link: '/nav/backend'
      },
    ]
  },
  {
    text: '娱乐导航',
    collapsed: false,
    items: [
      {
        text: '影视',
        link: '/nav/film-television'
      },
      {
        text: '音乐',
        link: '/nav/music'
      }
    ]
  },
]
