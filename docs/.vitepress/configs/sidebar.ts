import type {DefaultTheme} from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: '快速开始',
    link: '/quick-start/',
  },
  {
    text: '联系站长',
    link: '/about/',
  },
  {
    text: '编程资源导航',
    collapsed: false,
    items: [
      {
        text: '云平台',
        link: '/nav/cloud-platform'
      },
      {
        text: '前端资源',
        link: '/nav/frontend'
      },
      {
        text: '后端资源',
        link: '/nav/backend'
      },
      {
        text: '社区资源',
        link: '/nav/community'
      },
      {
        text: '开发辅助工具',
        link: '/nav/develop-utils'
      },
      {
        text: '代码托管平台',
        link: '/nav/code-hosting-platform'
      },
      {
        text: '写博客笔记工具',
        link: '/nav/note-utils'
      },
    ]
  },
  {
    text: 'AI资源工具导航',
    link: '/nav/ai',
  },
  {
    text: '实用工具资源导航',
    link: '/nav/practical-tools',
  },
]
