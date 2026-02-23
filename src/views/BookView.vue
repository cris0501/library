<template>
  <!-- Topbar -->
  <div class="flex justify-between items-center w-full h-[55px] left-0 px-6 bg-primary z-10 shadow-sm">
    <RouterLink to="/">
      <i class="icon icon-left text-2xl text-gray-900" />
    </RouterLink>
    <div class="flex items-center gap-3">
      <span class="font-plex font-bold text-sm text-gray-800">T. Letra</span>
      <input
        type="range"
        min="0.7"
        max="1.5"
        step="0.1"
        :value="fontSize"
        @input="fontSize = parseFloat($event.target.value)"
        class="accent-gray-900 cursor-pointer"
      />
    </div>
  </div>

  <!-- Content -->
  <div
    class="w-full lg:w-5/6 px-8 py-12 mx-auto mt-[110px] mb-16 text-justify"
    :style="{ fontSize: fontSize + 'em' }"
  >
    <div v-if="data">
      <RenderContent
        v-for="(item, index) in data"
        :key="'rc-' + index"
        :item="item"
      />
    </div>

    <div v-else class="flex flex-col justify-center items-center h-[70vh] gap-6">
      <div class="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center animate-pulse">
        <i class="icon icon-book text-3xl text-gray-900"></i>
      </div>
      <p class="font-plex font-bold text-xl text-gray-700">Leyendo contenido...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import RenderContent from '../components/book/RenderContent.vue'

const data = ref([])
const fontSize = ref(0.9)

onMounted(() => {
  fetch('/books/test.json')
    .then(r => r.json())
    .then(r => {
      setTimeout(() => { data.value = r }, 1000)
    })
    .catch(console.error)
})
</script>


