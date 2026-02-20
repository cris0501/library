<template>
  <span class="inline mx-1" v-html="rendered"></span>
</template>

<script setup>
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { computed } from 'vue'

const props = defineProps({
  content: { type: String, required: true }
})

const rendered = computed(() =>
  katex.renderToString(props.content, { throwOnError: false, displayMode: false })
)
</script>
