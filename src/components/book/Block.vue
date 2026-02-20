<template>
  <div class="my-6">
    <div class="border-2 border-yellow-400 rounded-xl p-4 mb-3 min-h-[80px]">
      <div v-for="(item, index) in items" :key="'block-'+index" v-show="active === index">
        <RenderContent v-for="(c, i) in item.content" :key="'bc-'+i" :item="c" />
      </div>
    </div>
    <div class="flex justify-center gap-2">
      <button
        v-for="(_, index) in items"
        :key="'bbtn-'+index"
        @click="active = index"
        class="w-10 h-10 rounded-lg font-bold text-sm transition-colors"
        :class="active === index
          ? 'bg-yellow-400 text-gray-900'
          : 'bg-gray-100 hover:bg-yellow-200 text-gray-600'"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RenderContent from './RenderContent.vue'

defineProps({
  items: { type: Array, required: true }
})

const active = ref(0)
</script>
