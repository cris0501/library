<template>
  <span
    class="inline mx-1"
    v-bind="props.id ? { id: props.id } : {}" 
    v-html="rendered"></span>
</template>

<script setup>
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { computed } from 'vue'

const props = defineProps({
  raw: { type: String, required: true },
  displayMode: { type: Boolean, default: false },
  id: {type: String, default: null}
})

const rendered = computed(() =>
  katex.renderToString(props.raw, { throwOnError: false, displayMode: props.displayMode })
)
</script>

