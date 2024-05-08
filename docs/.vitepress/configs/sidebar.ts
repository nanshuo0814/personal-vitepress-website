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
    text: '编程开发资源导航',
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
        text: '编程资源',
        link: '/nav/programming-resources'
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
