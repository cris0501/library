<template>
  <span class="inline mx-1" v-html="rendered"></span>
</template>

<script setup>
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { computed } from 'vue'

const props = defineProps({
  raw: { type: String, required: true }
})

const rendered = computed(() =>
  katex.renderToString(props.raw, { throwOnError: false, displayMode: false })
)
</script>

