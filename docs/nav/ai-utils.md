---
outline: [2, 3, 4]
---
<script setup>
import { AI_DATA } from './data/ai'
</script>


# AI导航

::: tip 说明
收集国内外常用的AI工具网站，例如：国外ChatGPT、国内通义千问等等
:::

<MNavLinks v-for="{title, items} in AI_DATA" :title="title" :items="items"/>


<br />

::: warning 版权声明
本文导航由 [nanshuo](https://github.com/nanshuo0814) 开发，如有引用、借鉴的请保留版权声明
:::
