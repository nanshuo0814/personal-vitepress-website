import type {NavLink} from '../../.vitepress/theme/types'

type Data = {
  title?: string
  items: NavLink[]
}

export const DATA: Data[] = [
  {
    items: [
      {
        title: 'Github',
        icon: 'https://www.github.com/favicon.ico',
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com',
      },
      {
        icon: 'https://gitee.com/favicon.ico',
        title: 'Gitee',
        desc: '码云国内的一个代码托管平台和开源社区',
        link: 'https://www.gitee.com',
      },
      {
        icon: 'http://gitlab.code-nav.cn/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png',
        title: 'GitLab',
        desc: '拥有强大的团队协作能力，并且可以在自托管服务器上进行部署',
        link: 'http://gitlab.code-nav.cn/',
      },
    ],
  },
]
