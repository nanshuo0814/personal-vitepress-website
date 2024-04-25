<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme'

const data = [
  {
    items: [{ img: '/public/wechatzhifu.png' }]
  },
  // {
  //   items: [{ img: '/public/zhifubaozhifu.png' }]
  // }
]
</script>

<template>
  <VPDocAsideSponsors :data="data" />
</template>

<style>
.vp-sponsor-grid.medium .vp-sponsor-grid-image {
  max-height: 90px;
  filter: grayscale(.8);
}
.vp-sponsor-grid.medium:hover .vp-sponsor-grid-image {
  filter: none;
}
.vp-sponsor-grid-item {
  background: var(--vp-c-bg-soft);
  transition: background-color .25s;
  filter: none;
}
.vp-sponsor-grid-item:hover {
  background-color: var(--vp-c-default-soft);
}
.dark .vp-sponsor-grid-item:hover {
  background-color: var(--vp-c-default-soft);
}
.dark .vp-sponsor-grid-image {
  filter: none;
}
.vp-sponsor-grid-image {
  filter: none;
}
</style>
