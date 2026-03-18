<template>
  <header v-if="showHeader">
    <div class="w-full bg-primary p-1 z-100">
      <nav class="flex py-2 px-5 lg:px-24">
        <div class="flex flex-1 items-center">
          <RouterLink :to="{name: 'home'}">
            <span class="flex items-center text-xl font-plex font-bold">
              <i class="icon icon-book mr-2"></i> 
              <span class=" hidden md:flex"> Biblioteca </span>
            </span>
          </RouterLink>
        </div>
        <div class="flex items-center space-x-3">
          <RouterLink :to="{name: 'feat'}">
            <span class="font-bold btn hidden md:flex"> Features </span>
            <span class="font-bold btn md:hidden"> Feats </span>
          </RouterLink>
          <RouterLink :to="{name: 'doc'}">
            <span class="font-bold btn hidden md:flex"> Documentation </span>
            <span class="font-bold btn md:hidden"> Docs </span>
            </RouterLink>
          <RouterLink :to="{name: 'book'}" class="hidden md:flex">
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





