<template>
  <div class="flex items-center gap-4 my-12 mx-auto w-2/3 p-4 border-l-4 border-yellow-400 bg-yellow-50 rounded-r-xl shadow-sm">
    <span class="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-xl font-bold text-2xl text-gray-900 flex-shrink-0">
      !
    </span>
    <p class="font-bold text-lg font-nunito text-gray-800">{{ title }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true }
})
</script>
