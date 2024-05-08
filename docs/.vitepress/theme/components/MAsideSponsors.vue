<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme'

const data1 = [
  {
    items: [{ img: '/wechatzhifu.png' }]
  },
  {
    items: [{ img: '/zhifubaozhifu.png' }]
  },
];

const data2 = [
  {
    items: [{ img: '/wxgzh1.png' }]
  },
];

const props = defineProps(['value']);

function getData() {
  if (props.value === 'data1') {
    return data1;
  } else if (props.value === 'data2') {
    return data2;
  } else {
    // 处理默认情况或错误情况
    return [];
  }
}
</script>

<template>
  <VPDocAsideSponsors :data="getData()" />
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
