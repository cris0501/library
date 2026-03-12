<template>
  <header v-if="showHeader">
    <div class="fixed w-full bg-primary px-5 py-3 z-10">
      <nav class="flex px-6 my-2 lg:px-24">
        <div class="flex flex-1 items-center">
          <RouterLink :to="{name: 'home'}">
            <span class="flex items-center text-xl font-plex font-bold">
              <i class="icon icon-book mr-2"></i> Biblioteca
            </span>
          </RouterLink>
        </div>
        <div class="flex items-center space-x-3">
          <RouterLink :to="{name: 'feat'}">
            <span class="font-bold btn"> Features </span>
          </RouterLink>
          <RouterLink :to="{name: 'doc'}">
            <span class="font-bold btn"> Documentation </span>
            </RouterLink>
            <RouterLink :to="{name: 'book'}">
            <span class="font-bold btn-primary"> Start Learning </span>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute, RouterLink, RouterView } from 'vue-router'
  import './assets/main.css'

  const route = useRoute()

  const showHeader = computed( () => {
    return route.name !== 'book'
  })
</script>

