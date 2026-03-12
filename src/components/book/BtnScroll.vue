<template>
  <Transition name="fade">
    <button
      v-if="navigationStack.length > 0"
      @click="goBack"
      class="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-2xl hover:bg-black transition-all active:scale-95"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      <span>Regresar</span>
    </button>
  </Transition>
</template>

<script setup>
  import { inject } from 'vue'
  const navigationStack = inject('navigationStack')
  const goBack = inject('goBack')
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

