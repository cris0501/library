<template>
  <span class="inline-block relative">
    <span
      ref="anchor"
      class="font-bold cursor-pointer underline decoration-double mx-1 text-amber-600 hover:text-amber-700"
      @click="toggleNote"
    >
      {{ Array.isArray(title) ? title[0] : title }}
    </span>

    <!-- Overlay solo en móvil -->
    <Teleport to="body">
      <div
        v-if="show && isMobile"
        class="fixed inset-0 z-40 bg-black/20"
        @click="toggleNote"
      />
    </Teleport>

    <Teleport to="body" :disabled="!isMobile">
      <div
        v-if="show"
        ref="noteElement"
        :class="noteClasses"
      >
        <RenderContent v-for="(item, i) in content" :key="'note-'+i" :item="item" />
      </div>
    </Teleport>

    <!-- Flecha solo en desktop -->
    <span
      v-if="show && !isMobile"
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-20
             w-0 h-0 border-l-[10px] border-l-transparent
             border-r-[10px] border-r-transparent
             border-t-[10px] border-t-yellow-400"
    />
  </span>
</template>

<script setup>
import { ref, nextTick, inject, computed, watch, onMounted, onUnmounted } from 'vue'
import RenderContent from './RenderContent.vue'

defineProps({
  title: { required: true },
  content: { type: Array, required: true }
})

const noteElement = ref(null)
const anchor = ref(null)
const positionClass = ref('left-1/2 -translate-x-1/2')

// Breakpoint reactivo
const isMobile = ref(false)
const checkMobile = () => { isMobile.value = window.innerWidth < 768 }

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => window.removeEventListener('resize', checkMobile))

const instanceId = Symbol()
const activeNoteId = inject('activeNoteId')
const show = computed(() => activeNoteId.value === instanceId)

const toggleNote = async () => {
  if (show.value) {
    activeNoteId.value = null
    positionClass.value = 'left-1/2 -translate-x-1/2'
  } else {
    activeNoteId.value = instanceId
  }
}

const noteClasses = computed(() => {
  const base = 'rounded-xl bg-yellow-400 p-3 shadow-lg font-nunito text-sm text-gray-800'
  if (isMobile.value) {
    // Centrado fijo, 90% del ancho
    return `fixed z-50 left-[5vw] w-[90vw] top-1/2 -translate-y-1/2 ${base}`
  }
  // Desktop: tooltip absoluto como antes
  return `absolute bottom-full z-10 mb-3 w-max max-w-[350px] ${positionClass.value} ${base}`
})

watch(show, async (isShowing) => {
  if (isShowing && !isMobile.value) {
    await nextTick()
    calculatePosition()
  }
})
</script>

