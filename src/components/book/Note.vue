<template>
  <span class="inline-block relative">
    <span
      ref="anchor"
      class="font-bold cursor-pointer underline decoration-double mx-1 text-amber-600 hover:text-amber-700"
      @click="toggleNote"
    >
      {{ Array.isArray(title) ? title[0] : title }}
    </span>

    <div
      v-if="show"
      ref="noteElement"
      :class="[
        'absolute bottom-full z-10 mb-3 w-max max-w-[85vw] sm:max-w-[350px] rounded-xl bg-yellow-400 p-3 shadow-lg font-nunito text-sm text-gray-800',
        positionClass
      ]"
    >
      <RenderContent v-for="(item, i) in content" :key="'note-'+i" :item="item" />
    </div>

    <span 
      v-if="show"
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-20 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-yellow-400"
    ></span>
  </span>
</template>

<script setup>
  import { ref, nextTick , inject, computed, watch } from 'vue'
  import RenderContent from './RenderContent.vue'
  
  defineProps({
    title: { required: true },
    content: { type: Array, required: true }
  })

  const noteElement = ref(null)
  const anchor = ref(null) // Referencia a la palabra
  const positionClass = ref('left-1/2 -translate-x-1/2')
  
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
  
  watch(show, async (isShowing) => {
    if (isShowing){
      await nextTick()
      calculatePosition()
    }
  })
  
  const calculatePosition = () => {
    if (!noteElement.value || !anchor.value) return
    const noteRect = noteElement.value.getBoundingClientRect()
    const screenWidth = window.innerWidth
    const padding = 20
  
    // Centro de la palabra
    const anchorRect = anchor.value.getBoundingClientRect()
    const anchorCenter = anchorRect.left + (anchorRect.width / 2)
    const halfNoteWidth = noteRect.width / 2
  
    if (anchorCenter - halfNoteWidth < padding) {
      // Sale por la izquierda -> movemos a la izquierda
      positionClass.value = 'left-0'
    } 
    else if (anchorCenter + halfNoteWidth > screenWidth - padding) {
      // Sale por la derecha -> movemos a la derecha
      positionClass.value = 'right-0'
    } 
    else {
      positionClass.value = 'left-1/2 -translate-x-1/2'
    }
  }

</script>
