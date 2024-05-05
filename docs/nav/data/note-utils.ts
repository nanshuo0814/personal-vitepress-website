import type {NavLink} from '../../.vitepress/theme/types'

type Data = {
  title?: string
  items: NavLink[]
}

export const DATA: Data[] = [
  {
    items: [
      {
        title: '语雀',
        icon: 'https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*vMxOQIh4KBMAAAAAAAAAAAAADvuFAQ/original',
        desc: '具备文档编辑、知识整理、团队协作等主要功能',
        link: 'https://yuque.com',
      },
      {
        icon: 'https://typoraio.cn/img/favicon-64.png',
        title: 'Typora',
        desc: '是一款简洁、高效的 Markdown 文本编辑器',
        link: 'https://typoraio.cn/',
      },
    ],
  },
]
