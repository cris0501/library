<template>
  <div class="flex flex-col my-8 overflow-hidden rounded-lg border border-gray-200">
    <section
      class="flex-1 text-center px-2 py-5 font-bold text-base text-white"
      :style="{ backgroundColor: color }"
    >
      {{ label }}
    </section>
    <section class="p-6">
      <div class="font-bold mb-3" v-if="props.title"> {{ props.title }}. </div>
      <RenderContent :item="cont" v-for="cont in props.content" />
    </section>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import RenderContent from './RenderContent.vue'
  
  const props = defineProps({
    kind:    { type: String, required: true },
    title:   { type: String, default: null },
    content: { type: Array },
    params:  { type: Object, default: () => ({}) },
  })
  
  const KINDS = {
    definition:  { label: 'Definicion',  color: '#E89005' },
    axiom:       { label: 'Axioma',      color: '#2E8B57' },
    theorem:     { label: 'Teorema',     color: '#2563EB' },
    lemma:       { label: 'Lema',        color: '#1E3A5F' },
    proposition: { label: 'Proposicion', color: '#7C3155' },
    corollary:   { label: 'Corolario',   color: '#4F46E5' },
    exercise:    { label: 'Ejercicio',   color: '#9F1239' },
    convention:  { label: 'Convencion',  color: '#6B7280' },
    proof:       { label: 'Demostracion', color: '#DC2626' },
    block:       { label: null,           color: '#6B7280' },
  }
  
  const config = computed(() => KINDS[props.kind] || { label: props.kind, color: '#6B7280' })
  const color = computed(() => config.value.color)
  const label = computed(() => {
    const base = config.value.label
    if (!base) return ''
    const title = props.params?.title || props.title
    return title ? `${base}: ${title}` : base
  })
</script>


