<template>
  <ul class="list-disc my-4 ml-8 space-y-1 font-nunito">
    <li v-for="(item, i) in content" :key="'ul-'+i">
      <!-- Se itera sobre el content del \item -->
      <RenderContent v-for="(sub, j) in item.content" :key="'ul-sub-'+j" :item="sub" />
    </li>
  </ul>
</template>

<script setup>
import RenderContent from './RenderContent.vue'

defineProps({
  content: { type: Array, required: true }
})
</script>

