<template>
  <header>
    <div class="fixed w-full bg-primary px-5 py-3 z-10">
      <nav class="flex px-6 lg:px-24">
        <div class="flex flex-1 items-center">
          <RouterLink to="/">
            <span class="flex items-center text-xl font-plex font-bold">
              <i class="icon icon-book mr-2"></i> BV-ESFM
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
          <!-- <RouterLink to="/"> -->
            <span class="font-bold btn-primary"> Start Learning </span>
            <!-- </RouterLink> -->
        </div>
      </nav>
    </div>
  </header>

  <!-- <div class="w-full pt-[76px]"> -->
    <RouterView />
  <!-- </div> -->
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import './assets/main.css'
</script>

<style scoped>
</style>

