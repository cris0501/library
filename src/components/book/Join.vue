<template>
  <div class="flex flex-col md:flex-row gap-6 my-4">
    <div class="flex flex-1 items-center justify-center [&>*]:flex-1 [&>*]:w-full">
      <RenderContent v-for="(sub, i) in slots[0]" :key="i" :item="sub" />
    </div>
    <div class="flex items-center justify-center min-w-1/3">
      <RenderContent v-for="(sub, i) in slots[1]" :key="i" :item="sub" />
    </div>
  </div>
</template>

<script setup>
  import RenderContent from './RenderContent.vue'

  defineProps({
    slots: { type: Array, required: true },
  })
</script>
