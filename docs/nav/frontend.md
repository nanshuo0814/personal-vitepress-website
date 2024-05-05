---
outline: [2, 3, 4]
---

<script setup>
import { FRONTEND_DATA } from './data/frontend'
</script>

# 前端导航

<MNavLinks v-for="{title, items} in FRONTEND_DATA" :title="title" :items="items"/>

<br />

::: warning 版权声明
本文由 [南烁](https://github.com/nanshuo0814) 开发，如有引用、借鉴的请保留版权声明
:::
