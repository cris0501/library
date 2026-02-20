<template>
  <ol class="list-decimal my-4 ml-8 space-y-1 font-nunito">
    <li v-for="(item, i) in content" :key="'ol-'+i">
      <RenderContent v-for="(sub, j) in item.content" :key="'ol-sub-'+j" :item="sub" />
    </li>
  </ol>
</template>

<script setup>
import RenderContent from './RenderContent.vue'

defineProps({
  content: { type: Array, required: true }
})
</script>
