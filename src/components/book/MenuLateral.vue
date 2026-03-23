<template>
  <!-- Overlay Background -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300"
    @click="close"
  ></div>

  <!-- Menu Panel -->
  <div
    class="fixed top-0 right-0 h-full w-3/4 max-w-md bg-primary z-50 transform transition-transform duration-300 ease-out shadow-xl"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- Header -->
    <div class="flex justify-between items-center px-6 py-4 border-b-2 border-dashed border-gray-400">
      <h2 class="font-plex font-bold text-lg text-gray-800">Menú</h2>
      <button @click="close" class="p-2">
        <i class="icon icon-left text-xl text-gray-700"></i>
      </button>
    </div>

    <!-- Content -->
    <div class="overflow-y-auto h-[calc(100%-60px)] px-6 py-4">
      <!-- Referencias -->
      <div class="mb-8">
        <h3 class="font-plex font-bold text-sm text-gray-600 uppercase tracking-wider mb-3">
          Referencias
        </h3>
        <ul class="space-y-2">
          <li v-for="(ref, key) in refsData" :key="key">
            <a
              :href="'#' + key"
              class="flex items-center py-2 px-3 rounded hover:bg-gray-200 text-gray-700 transition-colors"
              @click="handleRefClick(key)"
            >
              <span class="font-plex text-sm font-bold text-amber-600 mr-2">
                ({{ ref.index }})
              </span>
              <span class="font-plex text-sm text-gray-700 truncate">
                {{ ref.label || key }}
              </span>
            </a>
          </li>
          <li v-if="!refsData || Object.keys(refsData).length === 0">
            <p class="font-plex text-sm text-gray-500 italic">No hay referencias</p>
          </li>
        </ul>
      </div>

      <!-- LaTeX Original / Mostrar Webbook -->
      <div class="mb-8">
        <h3 class="font-plex font-bold text-sm text-gray-600 uppercase tracking-wider mb-3">
          Código Fuente
        </h3>
        <button
          v-if="viewMode === 'rendered'"
          class="w-full flex items-center py-3 px-4 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
          @click="openLatex"
        >
          <i class="icon icon-code text-lg text-gray-700 mr-3"></i>
          <span class="font-plex text-sm text-gray-700">Ver LaTeX Original</span>
        </button>
        <button
          v-else
          class="w-full flex items-center py-3 px-4 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
          @click="showWebbook"
        >
          <i class="icon icon-book text-lg text-gray-700 mr-3"></i>
          <span class="font-plex text-sm text-gray-700">Mostrar Webbook</span>
        </button>
      </div>

      <!-- Descargar PDF -->
      <div v-if="pdfUrl" class="mb-8">
        <h3 class="font-plex font-bold text-sm text-gray-600 uppercase tracking-wider mb-3">
          Descargar
        </h3>
        <a
          :href="pdfUrl"
          download
          class="w-full flex items-center py-3 px-4 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
          @click="close"
        >
          <i class="icon icon-download text-lg text-gray-700 mr-3"></i>
          <span class="font-plex text-sm text-gray-700">Descargar PDF original</span>
        </a>
      </div>

      <!-- En Desarrollo -->
      <div class="mb-8">
        <h3 class="font-plex font-bold text-sm text-gray-600 uppercase tracking-wider mb-3">
          En Desarrollo
        </h3>
        <ul class="space-y-2">
          <li>
            <button
              class="w-full flex items-center py-3 px-4 rounded bg-gray-100 hover:bg-gray-200 transition-colors opacity-50 cursor-not-allowed"
              disabled
            >
              <i class="icon icon-bookmark text-lg text-gray-500 mr-3"></i>
              <span class="font-plex text-sm text-gray-500">Notas</span>
            </button>
          </li>
          <li>
            <button
              class="w-full flex items-center py-3 px-4 rounded bg-gray-100 hover:bg-gray-200 transition-colors opacity-50 cursor-not-allowed"
              disabled
            >
              <i class="icon icon-highlight text-lg text-gray-500 mr-3"></i>
              <span class="font-plex text-sm text-gray-500">Resaltar</span>
            </button>
          </li>
          <li>
            <button
              class="w-full flex items-center py-3 px-4 rounded bg-gray-100 hover:bg-gray-200 transition-colors opacity-50 cursor-not-allowed"
              disabled
            >
              <i class="icon icon-book text-lg text-gray-500 mr-3"></i>
              <span class="font-plex text-sm text-gray-500">Índice</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, default: false },
  viewMode: { type: String, default: 'rendered' },
  pdfUrl: { type: String, default: '' }
})

const emit = defineEmits(['close', 'viewSource', 'viewRendered'])

const _refs = inject('refs')
const refsData = computed(() => {
  if (!_refs) return {}
  return _refs.value || _refs || {}
})

const close = () => {
  emit('close')
}

const handleRefClick = (key) => {
  close()
  setTimeout(() => {
    const element = document.getElementById(key)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, 100)
}

const openLatex = () => {
  emit('viewSource')
  close()
}

const showWebbook = () => {
  emit('viewRendered')
  close()
}
</script>
