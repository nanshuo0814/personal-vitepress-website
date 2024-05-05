import type { NavLink } from '../../.vitepress/theme/types'

type Data = {
  title?: string
  items: NavLink[]
}

export const DATA: Data[] = [
  {
    items: [
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
      {
        icon: 'https://static.json.cn/r/img/favicon/favicon.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
      {
        icon: 'https://base64.us/favicon.png',
        title: 'Base64',
        desc: 'Base64 在线编码解码(最好用的 Base64 在线工具)',
        link: 'https://base64.us/',
      },
      {
        icon: 'https://shields.io/img/favicon.ico',
        title: '徽标制作',
        desc: '操作简单，快速生成徽标，用于页脚等等地方展示',
        link: 'https://shields.io/',
      },
      {
        icon: 'https://www.toyaml.com/favicon.ico',
        title: 'yaml/properties互转',
        desc: '操作简单，快速生成徽标，用于页脚等等地方展示',
        link: 'https://www.toyaml.com/index.html',
      },
    ],
  },
]
