import type {DefaultTheme} from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '导航', items: [
      {text: '前端', link: '/frontend/'},
      {text: '前端', link: '/frontend/'},
      {text: '前端', link: '/frontend/'},
      {text: '前端', link: '/frontend/'},
      {text: '前端', link: '/frontend/'},
      {text: '前端', link: '/frontend/'},
      {text: '前端', link: '/frontend/'},
      {text: '前端', link: '/frontend/'},
      {text: '前端导航', link: '/nav/frontend'},
    ]
  },
  {text: '站长博客', link: 'https://blog.nanshuo.icu'},
  {text: '站长图床', link: 'https://img.nanshuo.icu'},
  {text: '关于站长', link: '/about/'},
]
