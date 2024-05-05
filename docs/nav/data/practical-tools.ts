import type {NavLink} from '../../.vitepress/theme/types'

type Data = {
  title?: string
  items: NavLink[]
}

export const DATA: Data[] = [
  {
    title: '远程办公软件',
    items: [
      {
        title: '向日葵远程控制',
        icon: 'https://sunlogin.oray.com/favicon.ico',
        desc: '支持多系统设备，实现跨平台互控，提供安全、高效的远程管理服务',
        link: 'https://sunlogin.oray.com/',
      },
      {
        icon: 'https://www.todesk.com/favicon.ico',
        title: 'ToDesk',
        desc: '远程控制软件，提供高效稳定、安全加密的多屏高清远程桌面服务',
        link: 'https://www.todesk.com/',
      },
    ],
  },
]
