import type {NavLink} from '../../.vitepress/theme/types'

type Data = {
  title?: string
  items: NavLink[]
}
export const DATA: Data[] = [
  {
    title: '技术社区',
    items: [
      {
        title: '开源中国',
        icon: 'https://static.oschina.net/new-osc/img/favicon.ico',
        desc: '提供开源项目、资讯和交流的平台',
        link: 'https://www.oschina.net/',
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn',
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com',
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com',
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com',
      },
      {
        title: '博客园',
        icon: 'https://www.cnblogs.com/images/logo.svg?v=2SMrXdIvlZwVoB1akyXm38WIKuTHVqvGD0CweV-B6cY',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://www.cnblogs.com',
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://juejin.cn',
      },
    ],
  },
  {
    title: '开发辅助工具',
    items: [
      {
        icon: 'https://1024tools.com/favicon.ico',
        title: 'UUID在线生成',
        desc: '在线生成UUID',
        link: 'https://1024tools.com/uuid',
      },
      {
        icon: 'https://www.bootschool.net//site/images/favico.png;bsid=E06C93D2621CB865980396DDE0E2B96F',
        title: 'BootSchool',
        desc: '英文ASCII艺术字，Spring Boot自定义启动Banner在线生成工具',
        link: 'https://www.bootschool.net/ascii',
      },
      {
        icon: 'https://www.boce.com/favicon.ico',
        title: 'BOCE',
        desc: '拨测网提供网站测速、域名检测、SSL证书等多功能站长工具，支持VIP会员服务',
        link: 'https://www.boce.com/',
      },
      {
        icon: 'https://1024tools.com/favicon.ico',
        title: 'UUID在线生成',
        desc: '在线生成UUID',
        link: 'https://1024tools.com/uuid',
      },
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
  {
    title: '代码托管平台',
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
  {
    title: '写博客笔记网站&工具',
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
  {
    title: '招聘求职网站',
    items: [
      {
        title: '力扣',
        icon: 'https://android-artworks.25pp.com/fs08/2024/01/03/3/110_88acd0ae7a97bd1ab9741f9f1647f647_con.png',
        desc: '中国领先的在线技术社区，提供技术职业培训、技术职业规划',
        link: 'https://leetcode.cn/',
      },
      {
        title: '牛客网',
        icon: 'https://static.nowcoder.com/fe/file/images/nowpick/web/www-favicon.ico',
        desc: '中国领先的在线技术社区，提供技术职业培训、技术职业规划',
        link: 'https://www.nowcoder.com',
      },
      {
        title: 'Boss直聘',
        icon: 'https://static.zhipin.com/v2/web/geek/images/logo.png',
        desc: '知名招聘平台，求职者能与招聘者直接对话，高效便捷，提供丰富岗位选择。',
        link: 'https://www.zhipin.com',
      },
      {
        title: '拉勾',
        icon: 'https://www.lagou.com/favicon.ico',
        desc: '专注于互联网行业的招聘平台，为互联网人才和企业搭建沟通桥梁。',
        link: 'https://www.lagou.com',
      },
      {
        title: '前程无忧',
        icon: 'https://www.51job.com/favicon.ico',
        desc: '综合性招聘平台，提供海量职位信息，服务广泛，助力求职者寻得理想工作。',
        link: 'https://www.51job.com',
      },
      {
        title: '猎聘网',
        icon: 'https://concat.lietou-static.com/fe-www-pc/v6/static/images/favicon.e6edbc00.ico',
        desc: '猎聘网是专注中高端人才招聘的平台，连接企业、猎头与求职者，提供优质职场机会。',
        link: 'https://www.liepin.com',
      },
    ],
  },
]
