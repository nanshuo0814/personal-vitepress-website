---
outline: [2, 3, 4]
---
<script setup>
import { AI_DATA } from '../data/ai.js'
</script>


# AI资源工具导航

::: tip 说明
收集国内外常用的AI对话聊天工具网站、AI编程辅助工具等等，例如：国外ChatGPT、国内通义千问等等

以下是站长自己常用的AI对话聊天工具网站（国内外），且觉得相对好用且免费的，更多的可以看“补充目录”里的其他对话聊天工具

如果你有任何建议或问题，请随时<a href='/about/'>**联系站长**</a> 
:::

<MNavLinks v-for="{title, items} in AI_DATA" :title="title" :items="items"/>


<br />

::: warning 版权声明
本文由 [南烁](https://github.com/nanshuo0814) 开发，如有引用、借鉴的请保留版权声明
:::
