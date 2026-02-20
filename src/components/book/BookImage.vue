<template>
  <div class="flex flex-col sm:flex-row items-start gap-5 my-6">
    <div class="flex-1 text-justify">
      <RenderContent v-for="(item, i) in content" :key="'img-c-'+i" :item="item" />
    </div>
    <div class="w-full sm:w-1/3 flex-shrink-0">
      <img :src="url" class="rounded-xl shadow-md w-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import RenderContent from './RenderContent.vue'

defineProps({
  url: { type: String, required: true },
  content: { type: Array, required: true },
  style: { type: String, default: '' }
})
</script>
