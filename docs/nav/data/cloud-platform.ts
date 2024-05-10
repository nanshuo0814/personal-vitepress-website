import type {NavLink} from '../../.vitepress/theme/types'

type Data = {
  title?: string
  items: NavLink[]
}

export const DATA: Data[] = [
  {
    title: '云服务提供商',
    items: [
      {
        title: '腾讯云',
        icon: 'https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/gateway/shareicons/cloud.png',
        desc: '提供全面的云服务和解决方案，具有强大的基础设施和丰富的产品',
        link: 'https://cloud.tencent.com/',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico',
        title: '阿里云',
        desc: '提供丰富的云服务，具备强大技术实力和高可靠性、稳定性',
        link: 'https://www.aliyun.com/',
      },
      {
        icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico',
        title: 'Vercel',
        desc: '用于部署和托管前端应用，提供了快速、可靠的部署服务、全球 CDN 分发等功能',
        link: 'https://vercel.com/',
      },
      {
        icon: 'https://dash.cloudflare.com//favicon.ico',
        title: 'Cloudflare',
        desc: '提供网站安全的云服务提供商，具备 DDoS 防护、CDN 分发等功能',
        link: 'https://dash.cloudflare.com/',
      },
      {
        icon: 'https://www.netlify.com/favicon/favicon.ico',
        title: 'Netlify',
        desc: '专注于前端应用部署和托管的云平台，自动化部署、快速的全球 CDN 分发',
        link: 'https://www.netlify.com/',
      },
      {
        icon: 'https://zeabur.com/favicon.svg',
        title: 'Zeabur',
        desc: '一个支持多语言和数据库的免费部署平台，适合个人和小团队使用',
        link: 'https://zeabur.com/',
      },
    ],
  },
  {
    title: '连接服务器软件',
    items: [
      {
        title: 'Xshell',
        icon: 'https://ts2.cn.mm.bing.net/th?id=OSAAS.56AB2223899BC5F9B9716E66CA5178C6&w=80&h=80&c=17&rs=1&o=6&dpr=1.1&pid=5.1',
        desc: '一款Windows平台上的SSH客户端，支持多会话、安全性高，用户界面友好',
        link: 'https://www.xshell.com/zh/xshell/',
      },
      {
        icon: 'https://finalshell.net/favicon.ico',
        title: 'FinalShell',
        desc: '一款多平台服务器管理工具，集成SSH连接、远程桌面加速，功能全面',
        link: 'https://www.hostbuf.com/',
      },
    ],
  },
  {
    title: '国内免费CDN加速&对象储存',
    items: [
      {
        title: '又拍云',
        icon: 'https://console.upyun.com/assets/favicon.png',
        desc: '提供有免费额度的CDN、云存储、HTTPS/SSL证书等一站式加速解决方案',
        link: 'https://console.upyun.com/',
      },
      {
        icon: 'https://console.dogecloud.com//images/icon/favicon.png',
        title: '多吉云',
        desc: '一家提供云存储、网站加速、CDN等服务的创新科技企业',
        link: 'https://console.dogecloud.com/home/overview',
      },
      {
        icon: 'https://static.qiniu.com/favicon.ico?v=2',
        title: '七牛云',
        desc: '专注于云存储、云处理等云计算相关服务的平台',
        link: 'https://portal.qiniu.com/home',
      },
    ],
  },
]
