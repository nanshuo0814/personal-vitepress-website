---
outline: [2, 3, 4]
---

<script setup>
import { FRONTEND_DATA } from './data/frontend'
</script>

# 前端导航

<MNavLinks v-for="{title, items} in FRONTEND_DATA" :title="title" :items="items"/>

<br />

::: danger 版权声明（特别感谢）
本文导航由 [maomao](https://github.com/maomao1996) 开发，如有引用、借鉴的请保留版权声明：<https://github.com/maomao1996/vitepress-nav-template>
:::
