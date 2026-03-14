<template>
  <!-- Topbar -->
  <div class="sticky top-0 left-0 flex justify-between items-center w-full h-[55px] px-6 bg-primary z-10 shadow-sm">
    <RouterLink :to="{name: 'home'}">
      <i class="icon icon-left text-2xl text-gray-900" />
    </RouterLink>
    <div class="flex items-center gap-3">
      <button
        v-if="viewMode === 'source'"
        @click="viewMode = 'rendered'"
        class="flex items-center gap-1"
      >
        <i class="icon icon-book text-2xl text-gray-900"></i>
        <span class="font-plex font-bold text-sm text-gray-800">Webbook</span>
      </button>
      <button @click="menuOpen = true" class="p-2">
        <i class="icon icon-menu text-2xl text-gray-900"></i>
      </button>
      <span class="font-plex font-bold text-sm text-gray-800">T. Letra</span>
      <input
        type="range"
        min="0.9"
        max="1.6"
        step="0.1"
        :value="fontSize"
        @input="fontSize = parseFloat($event.target.value)"
        class="accent-gray-900 cursor-pointer"
      />
    </div>
  </div>

  <!-- Menu Lateral -->
  <MenuLateral :isOpen="menuOpen" :viewMode="viewMode" @close="menuOpen = false" @viewSource="showSource" @viewRendered="viewMode = 'rendered'" />

  <!-- Content: rendered -->
  <div
    v-if="viewMode === 'rendered'"
    class="w-full lg:w-5/6 px-4 py-6 mx-auto mt-20 mb-16 text-justify"
    :style="{ fontSize: fontSize + 'em' }"
  >
    <div v-if="data.length">
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

    <BtnScroll />
  </div>

  <!-- Content: source (TeX raw) -->
  <div
    v-else
    class="w-full lg:w-5/6 px-4 py-6 mx-auto mt-20 mb-16"
    :style="{ fontSize: fontSize + 'em' }"
  >
    <div v-if="texContent" class="tex-source">
      <pre>{{ texContent }}</pre>
    </div>
    <div v-else class="flex flex-col justify-center items-center h-[70vh] gap-6">
      <div class="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center animate-pulse">
        <i class="icon icon-code text-3xl text-gray-900"></i>
      </div>
      <p class="font-plex font-bold text-xl text-gray-700">Cargando fuente...</p>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, provide } from 'vue'
  import { RouterLink } from 'vue-router'
  import RenderContent from '../components/book/RenderContent.vue'
  import BtnScroll from '../components/book/BtnScroll.vue'
  import MenuLateral from '../components/book/MenuLateral.vue'
  
  const data = ref([])
  const _refs = ref([])
  const fontSize = ref(1.2)
  const navigationStack = ref([])
  const menuOpen = ref(false)
  const viewMode = ref('rendered')
  const texContent = ref('')
  const book = "test" // ToDo> Implement {nameBook} in router
  
  const activeNoteId = ref(null)
  provide('activeNoteId', activeNoteId)
  provide('refs', _refs)
  
  const savePosition = () => {
    navigationStack.value.push(window.scrollY)
  }
  
  const goBack = () => {
    if (navigationStack.value.length > 0) {
      const lastPos = navigationStack.value.pop()
      window.scrollTo({
        top: lastPos,
        behavior: 'smooth'
      })
      
      if (navigationStack.value.length === 0) {
        history.replaceState(null, null, ' ')
      }
    }
  }
  
  provide('navigationStack', navigationStack)
  provide('savePosition', savePosition)
  provide('goBack', goBack)
  
  const showSource = () => {
    viewMode.value = 'source'
    if (texContent.value) return
    fetch(`${import.meta.env.BASE_URL}books/${book}/test.tex`)
      .then(r => r.text())
      .then(r => { texContent.value = r })
      .catch(console.error)
  }

  onMounted(() => {
    fetch(`${import.meta.env.BASE_URL}books/${book}/test.json`)
      .then(r => r.json())
      .then(r => {
        setTimeout(() => {
          data.value = r.content ? r.content : {}
          _refs.value = r.refs ? r.refs : []
        }, 2000)
      })
      .catch(console.error)
  })
</script>

<style scoped>
.tex-source pre {
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.7;
  color: #3a3028;
  background-color: #faf7f2;
  padding: 2rem;
  border-radius: 4px;
  border: 1px solid #e8e0d4;
  white-space: pre-wrap;
  word-break: break-word;
  letter-spacing: 0.01em;
}
</style>
