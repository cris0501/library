<template>
  <header>
    <div class="flex flex-col justify-center min-h-[45vh] bg-yellow-400 rounded-b-[50px] mb-[7%]">
      <div class="flex flex-col items-center w-2/3 mx-auto">
        <span class="font-plex font-bold text-6xl mb-5"> Learn Through Play </span>
        <p class="font-nunito text-2xl text-gray-800 text-center"> 
          A new way to learn languages with interactive exercises and LaTeX support
        </p>
        <div class="flex justify-around items-center mx-auto mt-8 space-x-4">
          <button class="btn"> Try Demo </button>
          <button class="btn"> Learn More </button>
        </div>
      </div>
    </div>
  </header>

  <article class="flex flex-col px-6 lg:px-24">
    <span class="font-plex font-bold text-center text-4xl w-full block mb-8"> Features </span>
    <div class="flex items-stretch space-x-10  my-5">
      <section class="flex-1 flex flex-col justify-center items-center border-3 border-yellow-400 rounded-xl p-4 space-y-3 min-h-[25vh]">
        <span class="font-nunito font-bold text-2xl w-full"> LaTeX Compatibility </span>
        <div class="w-full p-3 bg-gray-200/50 rounded-xl font-jet">
          \frac{d}{dx}\left(x^2\right) = 2x
        </div>
        <div class="w-full p-3 border-2 border-gray-200/75 rounded-xl font-jet">
          Result
        </div>
        <p class="text-gray-700 text-sm">
          Example of LaTeX mathematical notation rendered in your content
        </p>
      </section>
      <section class="flex-1 flex flex-col items-center p-4 space-y-8">
        <div class="flex items-start space-x-5">
          <span class="flex justify-center items-center bg-yellow-200 rounded-xl text-[1.5rem] text-amber-800 w-12 h-12"><i class="icon icon-file"></i></span>
          <div class="flex-1 flex flex-col">
            <span class="font-bold text-xl mb-2">Mathematical Expressions</span>
            <p class="text-gray-700">
              Write complex mathematical formulas using LaTeX syntax, rendered beautifully in your content.
            </p>
          </div>
        </div>
        <div class="flex items-start space-x-5">
          <span class="flex justify-center items-center bg-yellow-200 rounded-xl text-[1.5rem] text-amber-800 w-12 h-12"><i class="icon icon-graduation"></i></span>
          <div class="flex-1 flex flex-col">
            <span class="font-bold text-xl mb-2">Student-Friendly</span>
            <p class="text-gray-700">
              Designed specifically for university students, with academic features and formatting.
            </p>
          </div>
        </div>
        <div class="flex items-start space-x-5">
          <span class="flex justify-center items-center bg-yellow-200 rounded-xl text-[1.5rem] text-amber-800 w-12 h-12"><i class="icon icon-user"></i></span>
          <div class="flex-1 flex flex-col">
            <span class="font-bold text-xl mb-2">Community Reviews</span>
            <p class="text-gray-700">
              Get feedback and suggestions from other students in your field.
            </p>
          </div>
        </div>
      </section>
    </div>
  </article>

  <section>

  </section>

  <div class="min-h-[100vh]"></div>
</template>

<script setup>
</script>

<style scoped>

</style>

