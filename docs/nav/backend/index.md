---
outline: [2, 3, 4]
---
<script setup>
import { BACKEND_DATA } from '../data/backend'
</script>

# 后端导航

::: tip 说明
收集常见常用的**Java后端**编程开发工具，例如：Maven仓库、Mybatis、Springboot等等

倘若你知晓其他更好的资源，而这些资源在本站尚未收录，欢迎随时 <a href='/about/'>**联系站长**</a> 分享贡献资源哦！

如果你有任何建议或问题，请随时<a href='/about/'>**联系站长**</a>
:::

<MNavLinks v-for="{title, items} in BACKEND_DATA" :title="title" :items="items"/>

<br />

::: warning 版权声明
本文由 [南烁](https://github.com/nanshuo0814) 开发，如有引用、借鉴的请保留版权声明
:::
