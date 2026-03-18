<template>
  <div class="flex flex-col justify-center items-center w-full pt-[50px]">
    <p class="font-bold font-plex text-2xl">EduWords Features</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 w-full md:w-2/3 pb-20 features">
      <div class="flex flex-col p-6 rounded-xl border-2 border-primary">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-file text-primary mr-2"></i>
          LaTeX Compatibility
        </span>
        <p class="text-lg font-lg font-nunito">
          Write complex mathematical formulas using LaTeX syntax, rendered beautifully in your content.
        </p>
        <p class="text-right text-green-600">
          Partial
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-primary">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-share text-primary mr-2"></i>
          Community Sharing
        </span>
        <p class="text-lg font-lg font-nunito">
          Share your notes and learn from others in a collaborative environment.
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-primary">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-book-open text-primary mr-2"></i>
          Customizable Textbooks
        </span>
        <p class="text-lg font-lg font-nunito">
          Create and customize your own digital textbooks with rich, interactive content.
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-gray-300">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-bookmark text-gray-300 mr-2"></i>
          Progress Tracking
        </span>
        <p class="text-lg font-lg font-nunito">
          Monitor your learning progress and set goals for your studies.
        </p>
        <p class="text-right text-red-400">
          In progress
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-gray-300">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-graduation text-gray-300 mr-2"></i>
          Interactive Learning
        </span>
        <p class="text-lg font-lg font-nunito">
          Engage with content through word games and interactive exercises.
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-gray-300">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-translate text-gray-300 mr-2"></i>
          Multiple Languages
        </span>
        <p class="text-lg font-lg font-nunito">
          Support for multiple languages with specialized scientific and mathematical terminology.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .features > div {
    margin: 20px;
  }
</style>
