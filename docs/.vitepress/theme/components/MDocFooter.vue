<script setup lang="ts">
import { inject, Ref, computed } from 'vue'
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'

import { usePageId } from '../composables'

const DEV = inject<Ref<boolean>>('DEV')
const { theme } = useData()
const { footer, visitor } = theme.value

const { hasSidebar } = useSidebar()
const pageId = usePageId()

const establishmentTime = '2024-04-23 12:00:00'; // 示例建站时间

// 添加一个方法来格式化日期，如果需要的话
const formattedEstablishmentTime = computed(() => {
  const date = new Date(establishmentTime);
  return `${date.getFullYear()}年${date.getDate()}天${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`;
});

const isDocFooterVisible = computed(() => {
  return !DEV || footer.message || footer.copyright || visitor.badgeId
})
</script>

<template>
  <div v-if="isDocFooterVisible" v-show="hasSidebar" class="m-doc-footer">
    <div class="m-doc-footer-message">
      <img
        v-if="!DEV && visitor"
        class="visitor"
        :src="`https://visitor-badge.laobi.icu/badge?page_id=${visitor.badgeId}.${pageId}`"
        title="当前页面累计访问数"
        onerror="this.style.display='none'"
      />
      <a v-if="footer?.message" href="https://beian.miit.gov.cn/" target="_blank">
        {{ footer.message }}
      </a>
      <!-- 显示建站时间 -->
      <p>{{ formattedEstablishmentTime }}</p>
    </div>
    <p class="m-doc-footer-copyright" v-if="footer?.copyright">
      {{ footer.copyright }}
    </p>
  </div>
</template>

<style scoped>
.m-doc-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px 0;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.m-doc-footer-message,
.m-doc-footer-copyright {
  display: flex;
  align-items: center;
}

.visitor {
  margin-right: 8px;
}

@media (max-width: 414px) {
  .visitor {
    display: none;
  }
}
</style>
