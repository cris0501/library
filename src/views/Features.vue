<template>
  <div class="flex flex-col justify-center items-center w-full h-[90dvh] p-20">
    <p class="font-bold font-plex text-2xl">EduWords Features</p>
    
    <div class="grid grid-cols-3 gap-2 w-full features">
      <div class="flex flex-col p-6 rounded-xl border-2 border-primary">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-file text-primary mr-2"></i>
          LaTeX Compatibility
        </span>
        <p class="text-lg font-lg font-nunito">
          Write complex mathematical formulas using LaTeX syntax, rendered beautifully in your content.
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-primary">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-translate text-primary mr-2"></i>
          Multiple Languages
        </span>
        <p class="text-lg font-lg font-nunito">
          Support for multiple languages with specialized scientific and mathematical terminology.
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-primary">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-graduation text-primary mr-2"></i>
          Interactive Learning
        </span>
        <p class="text-lg font-lg font-nunito">
          Engage with content through word games and interactive exercises.
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
      <div class="flex flex-col p-6 rounded-xl border-2 border-primary">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-bookmark text-primary mr-2"></i>
          Progress Tracking
        </span>
        <p class="text-lg font-lg font-nunito">
          Monitor your learning progress and set goals for your studies.
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