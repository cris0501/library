<template>
  <!-- Topbar -->
  <div class="sticky top-0 left-0 flex justify-between items-center w-full h-[55px] px-6 bg-primary z-10 shadow-sm">
    <RouterLink :to="{name: 'home'}">
      <i class="icon icon-left text-2xl text-gray-900" />
    </RouterLink>
    <div class="flex items-center gap-3">
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
  <MenuLateral :isOpen="menuOpen" @close="menuOpen = false" />

  <!-- Content -->
  <div
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




