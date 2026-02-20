<template>
  <span class="inline relative">
    <span
      class="font-bold cursor-pointer underline decoration-double mx-1 text-amber-600 hover:text-amber-700"
      @click="show = !show"
    >{{ title }}</span>
    <span
      v-if="show"
      class="absolute bottom-full left-0 z-10 mb-2 min-w-[280px] max-w-[75vw] rounded-xl bg-yellow-400 p-3 shadow-lg font-nunito text-sm text-gray-800"
    >
      <RenderContent v-for="(item, i) in content" :key="'note-'+i" :item="item" />
      <span class="absolute top-full left-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-yellow-400"></span>
    </span>
  </span>
</template>

<script setup>
import { ref } from 'vue'
import RenderContent from './RenderContent.vue'

defineProps({
  title: { type: String, required: true },
  content: { type: Array, required: true }
})

const show = ref(false)
</script>
