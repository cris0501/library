<template>
  <header>
    <div class="fixed w-full bg-primary px-5 py-3">
      <nav class="flex">
        <div class="flex flex-1 items-center">
          <RouterLink to="/">
            <span class="text-xl font-plex font-bold"><i class="icon icon-book mr-2"></i> BV-ESFM </span>
          </RouterLink>
        </div>
        <div class="flex items-center space-x-3">
          <!-- <RouterLink to="/"> -->
            <span class="font-bold hover:bg-amber-200/75 px-3 py-2 rounded-xl"> Features </span>
          <!-- </RouterLink> -->
          <!-- <RouterLink to="/"> -->
            <span class="font-bold hover:bg-amber-200/75 px-3 py-2 rounded-xl"> Documentation </span>
            <!-- </RouterLink> -->
          <!-- <RouterLink to="/"> -->
            <span class="font-bold btn"> Start Learning </span>
            <!-- </RouterLink> -->
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import './assets/main.css'
</script>

<style scoped>
</style>

