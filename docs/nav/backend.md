---
outline: [2, 3, 4]
---
<script setup>
import { BACKEND_DATA } from './data/backend'
</script>

# 后端导航

<MNavLinks v-for="{title, items} in BACKEND_DATA" :title="title" :items="items"/>

<br />

::: warning 版权声明
本文导航由 [nanshuo](https://github.com/nanshuo0814) 开发，如有引用、借鉴的请保留版权声明
:::
