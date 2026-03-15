<template>
  <!-- Solo el anchor, limpio -->
  <span
    ref="anchor"
    class="inline-block font-bold cursor-pointer underline decoration-double mx-1 text-amber-600 hover:text-amber-700"
    @click="toggleNote"
  >
    {{ Array.isArray(title) ? title[0] : title }}
  </span>

  <!-- Todo lo demás vive en el body siempre -->
  <Teleport to="body">
    <div v-if="show">
      <!-- Overlay: en móvil oscuro, en desktop transparente pero cierra -->
      <div
        class="fixed inset-0 z-40"
        :class="isMobile ? 'bg-black/20' : ''"
        @click="toggleNote"
      />

      <!-- Flecha solo desktop -->
      <div
        v-if="!isMobile"
        class="absolute z-50 w-0 h-0
               border-l-[10px] border-l-transparent
               border-r-[10px] border-r-transparent
               border-t-[10px] border-t-yellow-400"
        :style="arrowStyle"
      />

      <!-- Nota -->
      <div
        ref="noteElement"
        class="absolute z-50 rounded-xl bg-yellow-400 p-3 shadow-lg font-nunito text-sm text-gray-800"
        :style="noteStyle"
      >
        <RenderContent v-for="(item, i) in content" :key="'note-'+i" :item="item" />
      </div>
    </div>
  </Teleport>
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

const toggleNote = () => {
  activeNoteId.value = show.value ? null : instanceId
}

// Posición calculada
const notePos = ref({ top: 0, left: 0, arrowLeft: 0 })

const calculatePosition = async () => {
  await nextTick()
  if (!anchor.value || !noteElement.value) return

  const anchorRect = anchor.value.getBoundingClientRect()
  const noteRect = noteElement.value.getBoundingClientRect()
  const margin = 8

  let left = anchorRect.left + window.scrollX + (anchorRect.width / 2) - (noteRect.width / 2)
  left = Math.max(margin, Math.min(left, window.innerWidth - noteRect.width - margin))

  const top = anchorRect.top + window.scrollY - noteRect.height - 12

  notePos.value = {
    top,
    left,
    arrowLeft: anchorRect.left + window.scrollX + (anchorRect.width / 2)
  }
}

const noteStyle = computed(() => {
  if (isMobile.value) {
    return {
      left: '5vw',
      width: '90vw',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }
  return {
    top: `${notePos.value.top}px`,
    left: `${notePos.value.left}px`,
    maxWidth: '350px',
    width: 'max-content'
  }
})

const arrowStyle = computed(() => ({
  top: `${notePos.value.top + noteElement.value?.offsetHeight}px`,
  left: `${notePos.value.arrowLeft - 10}px`
}))

watch(show, async (isShowing) => {
  if (isShowing && !isMobile.value) {
    await nextTick()
    calculatePosition()
  }
})
</script>

