import type { NavLink } from '../../.vitepress/theme/types'

type AiData = {
  title: string
  items: NavLink[]
}

export const AI_DATA: AiData[] = [
  {
    title: '国外AI聊天大模型',
    items: [
      {
        icon: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png',
        // icon: '/icons/ai/chatgpt.png',
        title: 'ChatGPT',
        desc: '号称地表最强 AI ',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://copilot.microsoft.com/rp/cgFxt_KTOKfjNNxtm5HS3A13G4I.jpg',
        // icon: '/icons/ai/Copilot.jpg',
        title: 'Copilot',
        desc: 'Microsoft Copilot AI or New Bing',
        link: 'https://copilot.microsoft.com/',
      },
    ],
  },
  {
    title: '国内AI聊天大模型',
    items: [
      {
        icon: '/icons/ai/tongyiqianwen.png',
        title: '通义千问',
        desc: '阿里巴巴开发的中文大型语言模型',
        link: 'https://tongyi.aliyun.com/qianwen/',
      },
      {
        icon: 'https://p9-flow-imagex-sign.byteimg.com/ocean-cloud-tos/FileBizType.BIZ_BOT_ICON/4180773176086868_1709203591079450233_5Y6fJgvsfc.jpeg~tplv-a9rns2rl98-icon-tiny.jpeg?rk3s=6823e3d0&x-expires=1716726024&x-signature=Z1PVMC5hk807hOIo1yL0AoobW%2BE%3D',
        // icon: '/icons/ai/doubao.png',
        title: '豆包',
        desc: '字节跳动对话助手',
        link: 'https://www.doubao.com/chat/',
      },
      {
        icon: 'https://nlp-eb.cdn.bcebos.com/static/eb/asset/logo.8a6b508d.png',
        // icon: '/icons/ai/wenxinyiyan.ico',
        title: '文心一言',
        desc: '百度的语言模型',
        link: 'https://yiyan.baidu.com/',
      },
      {
        // icon: 'https://chatglm.cn/img/icons/favicon-32x32.png',
        icon: '/icons/ai/zhipuqingyan.png',
        title: '智谱清言',
        desc: '智谱华章科技公司的大模型',
        link: 'https://chatglm.cn/main/alltoolsdetail',
      },
      {
        icon: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
        // icon: '/icons/ai/yuezhianmian.png',
        title: 'Kimi Chat',
        desc: '月之暗面的聊天机器人',
        link: 'https://kimi.moonshot.cn/',
      },
      {
        icon: 'https://xinghuo.xfyun.cn/spark-icon.ico',
        // icon: '/icons/ai/yuezhianmian.png',
        title: '讯飞星火',
        desc: '科大讯飞研发的大模型',
        link: 'https://xinghuo.xfyun.cn/',
      },
    ],
  },
  {
    title: '国外AI编程辅助工具',
    items: [
      {
        icon: 'https://github.com/fluidicon.png',
        // icon: '/icons/ai/github.png',
        title: 'Copilot',
        desc: 'Github Copilot',
        link: 'https://github.com/features/copilot',
      },
      {
        icon: 'https://sourcegraph.com/favicon.png',
        title: 'Sourcegraph',
        desc: '代码界的Google',
        link: 'https://aws.amazon.com/cn/codewhisperer/',
      },
      {
        icon: 'https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico',
        title: 'Code Whisper',
        desc: '亚马逊推出的AI编程助手',
        link: 'https://aws.amazon.com/cn/codewhisperer/',
      },
    ],
  },
  {
    title: '国内AI编程辅助工具',
    items: [
      {
        icon: '/icons/ai/tongyiqianwen.png',
        title: '通义灵码',
        desc: '提供代码智能生成、研发智能问答能力',
        link: 'https://tongyi.aliyun.com/lingma',
      },
      {
        icon: 'https://www.tabnine.com/wp-content/themes/tabnine/dist/images/favicon.png',
        title: 'Tabnine',
        desc: '由Codota公司开发，智能代码补全',
        link: 'https://www.tabnine.com/',
      },
      {
        icon: 'https://codegeex.cn/assets/images/only_logo_dark.png',
        title: 'CodeGeeX',
        desc: '智谱AI推出的编程助手',
        link: 'https://codegeex.cn/zh-CN/',
      },
    ],
  },
  {
    title: '更多补充AI资源工具',
    items: [
      {
        icon: 'https://toolsbox.io/wp-content/uploads/2023/12/logo-square.png',
        title: 'ToolsBox',
        desc: 'AI一站式工具集合',
        link: 'https://toolsbox.io/',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: '公益导航网站',
        desc: '公益ChatGPT导航',
        link: 'http://124.220.104.235/web/chatgpt',
      },
    ],
  }
]
