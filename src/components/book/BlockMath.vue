<template>
  <div class="my-8 flex justify-center overflow-x-auto" v-html="rendered"></div>
</template>

<script setup>
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { computed } from 'vue'

const props = defineProps({
  raw: { type: String, required: true }
})

const rendered = computed(() =>
  katex.renderToString(props.raw, { throwOnError: false, displayMode: true })
)
</script>

