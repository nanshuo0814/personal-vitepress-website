import type {NavLink} from '../../.vitepress/theme/types'

type Data = {
  title?: string
  items: NavLink[]
}

export const DATA: Data[] = [
  {
    title: '免费影视网站&APP',
    items: [
      {
        title: '搜片网站线路网速情况',
        icon: 'https://soupian.one/images/icon.png',
        desc: '查看搜片网站不同域名下线路的网速情况，找到最优的进行观看',
        link: 'https://xindizhi.github.io/soupian/',
      },
      {
        icon: 'https://soupian.one/images/icon.png',
        title: '搜片',
        desc: '收录每个优秀的影视站点，集合各种影视资源，方便你快速找到你喜欢的片源',
        link: 'https://soupian.one/',
      },
      {
        icon: 'https://dyxs31.com/statics/logo.png',
        title: '电影先生',
        desc: '电影、电视剧、综艺、动漫等等都能看，不错',
        link: 'https://dyxs31.com/',
      },
      {
        icon: 'https://waipian28.com//statics/logo.png',
        title: '歪片星球',
        desc: '电影、电视剧、综艺、动漫等等都能看，还行',
        link: 'https://waipian28.com/',
      },
      {
        icon: 'https://www.pptv06.com/mxtheme/images/favicon.png',
        title: '皮皮影视',
        desc: '电影、电视剧、综艺、动漫等等都能看，相对不错',
        link: 'https://www.pptv06.com/',
      },
      {
        icon: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.lT6aPKhFwKX1UHwT5fdT_QAAAA?rs=1&pid=ImgDetMain',
        title: '往往影视',
        desc: '精彩电影剧集免费在线观看',
        link: 'https://www.oftens.top/',
      },
      {
        icon: 'https://registry.npmmirror.com/@liumingye/cdn2/1.5.63/files/favicon.ico',
        title: 'MyFreeMP3',
        desc: '免费音乐在线听和下载mp3音频和歌词',
        link: 'https://tools.liumingye.cn/music/#/',
      },
    ],
  },
  {
    title: '知名搜索引擎',
    items: [
      {
        icon: 'https://www.baidu.com/favicon.ico',
        title: '百度',
        desc: '百度一下，你就知道',
        link: 'https://www.baidu.com',
      },
      {
        icon: 'https://www.google.com/favicon.ico',
        title: 'Google',
        desc: '全球最大的搜索引擎',
        link: 'https://www.google.com',
      },
      {
        icon: 'https://www.bing.com/favicon.ico',
        title: 'Bing',
        desc: '微软 Bing 搜索',
        link: 'https://cn.bing.com',
      },
      {
        icon: 'https://www.sogou.com/favicon.ico',
        title: '搜狗',
        desc: '搜狗搜索',
        link: 'https://www.sogou.com',
      },
      {
        icon: 'https://www.so.com/favicon.ico',
        title: '360',
        desc: '360 搜索',
        link: 'https://www.so.com',
      },
    ]
  },
  {
    title: '在线翻译网站',
    items: [
      {
        icon: 'https://www.baidu.com/favicon.ico',
        title: '百度翻译',
        desc: '百度翻译，翻译工具',
        link: 'https://fanyi.baidu.com/',
      },
      {
        icon: 'https://www.google.com/favicon.ico',
        title: 'Google翻译',
        desc: '谷歌翻译，翻译工具',
        link: 'https://translate.google.cn/',
      },
      {
        icon: 'https://www.bing.com/favicon.ico',
        title: 'Bing翻译',
        desc: '微软 Bing 翻译，翻译工具',
        link: 'https://cn.bing.com/translator',
      },
      {
        icon: 'https://www.sogou.com/favicon.ico',
        title: '搜狗翻译',
        desc: '搜狗翻译，翻译工具',
        link: 'https://fanyi.sogou.com/',
      },
      {
        icon: 'https://www.so.com/favicon.ico',
        title: '360翻译',
        desc: '360 翻译，翻译工具',
        link: 'https://fanyi.so.com/',
      },
      {
        icon: 'https://www.deepl.com/favicon.ico',
        title: 'Deepl翻译',
        desc: 'Deepl翻译，翻译工具',
        link: 'https://www.deepl.com/translator',
      },
      {
        icon: 'https://www.iciba.com/favicon.ico',
        title: 'ICIBA翻译',
        desc: 'ICIBA翻译，翻译工具',
        link: 'https://www.iciba.com/',
      },
      {
        icon: 'https://www.youdao.com/favicon.ico',
        title: '有道翻译',
        desc: '有道翻译，翻译工具',
        link: 'https://fanyi.youdao.com/',
      },
    ]
  },
  {
    title: '远程办公软件&网站',
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
      {
        icon: 'data:image/x-icon;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',
        title: '苏打办公',
        desc: '一站式企业协作平台，提供文档编辑、会议、邮件等多功能服务',
        link: 'https://bangong.360.cn/',
      },
      {
        icon: 'https://wormhole.app/images/logo-80x80.png',
        title: 'Wormhole',
        desc: 'Wormhole 让你能以端到端加密和自动过期链接的方式分享文件',
        link: 'https://wormhole.app/',
      },
      {
        icon: 'https://static.deepl.com/img/favicon/favicon_16.png',
        title: 'Deepl文档翻译器',
        desc: '包括PDF、word、pptx格式的在线翻译',
        link: 'https://www.deepl.com/translator/',
      },
    ],
  },
  {
    title: '邮箱',
    items: [
      {
        title: 'QQ邮箱',
        icon: 'https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_32h.png',
        desc: '腾讯提供的免费邮箱服务，以简洁界面、大容量存储、与QQ集成和安全性著称',
        link: 'https://mail.qq.com/',
      },
      {
        icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico',
        title: 'Gmail邮箱',
        desc: 'Google提供的免费电子邮件服务，以强大的搜索、大容量存储、标签系统',
        link: 'https://mail.google.com/mail/u/1/?pli=1#inbox',
      },
      {
        icon: 'https://mail.proton.me//assets/apple-touch-icon-60x60.png',
        title: 'ProtonMail邮箱',
        desc: '一个注重隐私保护的电子邮件服务，提供端到端加密、无日志政策和基于瑞士法律的安全性',
        link: 'https://mail.google.com/mail/u/1/?pli=1#inbox',
      },
      {
        icon: 'https://mail.163.com/favicon.ico',
        title: '网易邮箱',
        desc: '163邮箱是网易提供的稳定、大容量的电子邮件服务',
        link: 'https://mail.163.com/',
      },
    ],
  },
  {
    title: '图片相关',
    items: [
      {
        title: 'removebg',
        icon: 'https://www.remove.bg//apple-touch-icon.png?v=fc0bfce6e1310f1539afec9729716721',
        desc: '一个使用AI自动去除图片背景的在线服务，快速、准确且易于使用',
        link: 'https://www.remove.bg/zh/upload',
      },
      {
        icon: 'https://www.vidmore.com//images/index/favicon.ico',
        title: 'vidmore',
        desc: '在线水印去除器可以完美地消除图像中的水印',
        link: 'https://www.vidmore.com/zh/watermark-remover/#',
      },
      {
        icon: 'https://arc.tencent.com//logo.ico',
        title: 'ARC',
        desc: '腾讯旗下的AI图片处理工具，修复模糊图片',
        link: 'https://arc.tencent.com/zh/ai-demos/faceRestoration',
      },
    ],
  },
]
