import type {NavLink} from '../../.vitepress/theme/types'

type BackendData = {
  title?: string
  items: NavLink[]
}

export const BACKEND_DATA: BackendData[] = [
  {
    title: '开发软件&环境',
    items: [
      {
        icon: 'https://git-scm.com/favicon.ico',
        title: 'Git',
        desc: '版本控制工具，用于代码的版本管理和团队协作',
        link: 'https://git-scm.com/download',
      },
      {
        icon: 'https://www.jetbrains.com/icon.svg?r=1234',
        title: 'IntelliJ IDEA',
        desc: '由JetBrains公司开发的集成开发环境（IDE）用于Java语言开发的工具之一',
        link: 'https://www.jetbrains.com/zh-cn/idea/',
      },
      {
        icon: 'https://www.eclipse.org/downloads/assets/public/images/logo-eclipse.png',
        title: 'eclipse',
        desc: '一款流行的集成开发环境（IDE），主要用于Java开发，支持多种其他编程语言',
        link: 'https://eclipseide.org/',
      },
      {
        icon: 'https://www.oracle.com/asset/web/favicons/favicon-32.png',
        title: 'JDK',
        desc: '提供了编译和运行Java程序的环境以及开发工具',
        link: 'https://www.oracle.com/java/technologies/downloads/',
      },
      {
        icon: 'https://maven.apache.org/images/maven-logo-black-on-white.png',
        title: 'Maven',
        desc: '一个由Apache软件基金会提供的项目管理和综合工具',
        link: 'https://maven.apache.org/',
      },
    ],
  },
  {
    title: '开发框架',
    items: [
      {
        icon: 'https://baomidou.com/img/logo.svg',
        title: 'Mybatis',
        desc: '半自动化的持久层框架，提供简洁的API来简化数据库操作',
        link: 'https://mybatis.org/mybatis-3/zh_CN/index.html/',
      },
      {
        icon: 'https://baomidou.com/img/logo.svg',
        title: 'Mybatis-plus',
        desc: '对MyBatis框架进行增强的开源工具，旨在简化开发过程并提升开发效率',
        link: 'https://baomidou.com/',
      },
      {
        icon: 'https://spring.io/favicon.svg?v=96334d577af708644f6f0495dd1c7bc8',
        title: 'Spring',
        desc: '一个功能强大且灵活的工具，适用于从简单的单层应用程序到复杂的企业级应用',
        link: 'https://spring.io/',
      },
      {
        icon: 'https://spring.io/favicon.svg?v=96334d577af708644f6f0495dd1c7bc8',
        title: 'SpringBoot中文文档',
        desc: '基于Spring的开源框架，旨在简化Spring应用的配置和开发过程',
        link: 'https://springdoc.cn/spring-boot/',
      },
      {
        icon: 'https://spring.io/favicon.svg?v=96334d577af708644f6f0495dd1c7bc8',
        title: 'SpringMVC',
        desc: '一个基于Java的轻量级Web框架，实现了MVC（模型-视图-控制器）设计模式',
        link: 'https://springdoc.cn/spring/web.html#mvc',
      },
      {
        icon: 'https://hibernate.github.net.cn/favicon.ico',
        title: 'Hibernate',
        desc: '一个对象关系映射（ORM）框架，用于将Java对象映射到数据库表中',
        link: 'https://hibernate.github.net.cn/',
      },
      {
        icon: 'https://cn.dubbo.apache.org/imgs/favicon.png',
        title: 'Dubbo',
        desc: '一个高性能的RPC框架，用于服务治理和微服务架构',
        link: 'https://cn.dubbo.apache.org/zh-cn/',
      },
      {
        icon: 'https://netty.io/images/favicon.ico',
        title: 'Netty',
        desc: '一个事件驱动的异步网络应用框架，用于快速开发高性能的网络服务器和客户端程序',
        link: 'https://netty.io/',
      },
      {
        icon: 'https://vertx.io/favicons/favicon.ico',
        title: 'Vert.x',
        desc: '一个多语言支持的Web框架，它能够在Java虚拟机（JVM）上运行',
        link: 'https://vertx.io/',
      },
      {
        icon: 'https://spring.io/favicon.svg?v=96334d577af708644f6f0495dd1c7bc8',
        title: 'SpringCloud',
        desc: '一个构建在SpringBoot之上的微服务框架，提供了一套全面的微服务解决方案',
        link: 'https://spring.io/projects/spring-cloud',
      },
      {
        icon: 'https://nacos.io/img/nacos_colorful.png',
        title: 'nacos',
        desc: '一个动态服务发现、配置和服务管理平台，它专为微服务架构设计',
        link: 'https://nacos.io/zh-cn/docs/quick-start.html',
      },
      {
        icon: 'https://spring.io/favicon.svg?v=96334d577af708644f6f0495dd1c7bc8',
        title: 'SpringWeb',
        desc: 'Spring框架中专门用于构建Web应用的模块，提供了一套简化Web开发的机制',
        link: 'https://docs.spring.io/spring-framework/reference/web/webmvc.html',
      },
      {
        icon: 'https://www.elastic.co/apple-icon-57x57.png',
        title: 'Elasticsearch',
        desc: '一个开源的分布式搜索和分析引擎，它能够在近实时内存取回数据，并支持多租户',
        link: 'https://www.elastic.co/cn/elasticsearch',
      },
      {
        icon: 'https://www.rabbitmq.com/img/rabbitmq-logo.svg',
        title: 'rebbitmq',
        desc: '一个高性能的消息中间件，广泛应用于各种系统中以实现异步通信和处理',
        link: 'https://www.rabbitmq.com/',
      },
      {
        icon: 'https://tomcat.apache.org/res/images/tomcat.png',
        title: 'Tomcat',
        desc: '一个免费的Web服务器，主要用于部署和运行Java Web应用程序',
        link: 'https://tomcat.apache.org/',
      },
    ]
  },
  {
    title: '接口测试',
    items: [
      {
        icon: 'https://www.postman.com/_ar-assets/images/favicon-1-32.png',
        title: 'Postman',
        desc: '一款流行的接口测试工具，它以其用户友好的界面和强大的功能而广受欢迎',
        link: 'https://www.postman.com/',
      },
      {
        icon: 'https://cdn.apifox.com/static/logo/favicon.ico',
        title: 'Apifox',
        desc: '一款集API文档、调试、Mock和自动化测试于一体的协作平台，旨在提高开发效率并确保数据一致性',
        link: 'https://www.apipost.cn/',
      },
      {
        icon: 'https://img.cdn.apipost.cn/website7/favicon.ico',
        title: 'Apipost',
        desc: '一款流行的集成开发环境（IDE），主要用于Java开发，支持多种其他编程语言',
        link: 'https://www.apipost.cn/',
      },
    ],
  },
  {
    title: '数据库',
    items: [
      {
        icon: 'https://labs.mysql.com/common/themes/sakila/favicon.ico',
        title: 'MySQL',
        desc: '开源的关系型数据库管理系统，适用于存储和管理结构化数据，性能稳定应用广泛',
        link: 'https://www.mysql.com/cn/',
      },
      {
        icon: 'https://redis.io/wp-content/themes/wpx/assets/images/favicons/apple-touch-icon.png?v=A0mpW2gQlj',
        title: 'Redis',
        desc: '开源内存存储系统，数据类型丰富，用于缓存、分布式及消息队列，速度快',
        link: 'https://redis.io/',
      },
      {
        icon: 'https://www.oracle.com/favicon.ico',
        title: 'Oracle',
        desc: '功能强大、可靠的关系型数据库，适用于企业级应用，性能出色且功能丰富',
        link: 'https://www.oracle.com/cn/',
      },
      {
        icon: 'https://www.mongodb.com/assets/images/global/favicon.ico',
        title: 'MongoDB',
        desc: '灵活、可扩展、高性能的分布式数据库，适用于多种场景',
        link: 'https://www.mongodb.com/zh-cn',
      },
      {
        icon: 'https://b.hnhj9.cn/sql/img/tglr.png',
        title: 'SQL Server',
        desc: '兼容性好、具备企业级功能、管理工具完善且安全性较高的关系型数据库',
        link: 'https://www.microsoft.com/zh-cn/sql-server/sql-server-downloads',
      },
      {
        icon: 'https://www.postgresql.org/favicon.ico',
        title: 'PostgreSQL',
        desc: '可扩展、支持丰富数据类型、可靠且有良好社区支持的开源关系型数据库',
        link: 'https://www.postgresql.org/',
      },
    ],
  },
  {
    title: '连接数据库软件',
    items: [
      {
        icon: 'https://navicat.com.cn/images/Navicat_16_Premium_win_256x256.ico',
        title: 'Navicat',
        desc: '界面直观、支持多种数据库、功能强大且能提高工作效率的数据库管理工具',
        link: 'https://navicat.com.cn/',
      },
      {
        icon: 'https://webyog.com/wp-content/uploads/2022/09/SQL_yog.png',
        title: 'SQLyog',
        desc: '一款功能强大的 MySQL 数据库管理工具，提供了方便的图形界面',
        link: 'https://webyog.com/product/sqlyog/',
      },
      {
        icon: 'https://quick123.net/images/common/quick_redis.png',
        title: 'QuickRedis',
        desc: '一款直观易用、可实时监控且便于数据管理的 Redis 数据库管理工具',
        link: 'https://quick123.net/',
      },
    ],
  }
]
