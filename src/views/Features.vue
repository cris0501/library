<template>
  <div class="flex flex-col justify-center items-center w-full pt-[50px]">
    <p class="font-bold font-plex text-2xl">Características de EduWords</p>

    <div class="grid grid-cols-1 md:grid-cols-2 w-full md:w-2/3 pb-20 features">
      <div class="flex flex-col p-6 rounded-xl border-2 border-primary">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-file text-primary mr-2"></i>
          Compatibilidad con LaTeX
        </span>
        <p class="text-lg font-lg font-nunito">
          Escribe fórmulas matemáticas complejas con sintaxis LaTeX, renderizadas de forma elegante en tu contenido.
        </p>
        <p class="text-right text-green-600">
          Parcial
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-primary">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-share text-primary mr-2"></i>
          Compartir en Comunidad
        </span>
        <p class="text-lg font-lg font-nunito">
          Comparte tus apuntes y aprende de otros en un entorno colaborativo.
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-primary">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-book-open text-primary mr-2"></i>
          Libros Personalizables
        </span>
        <p class="text-lg font-lg font-nunito">
          Crea y personaliza tus propios libros de texto digitales con contenido rico e interactivo.
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-gray-300">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-bookmark text-gray-300 mr-2"></i>
          Seguimiento del Progreso
        </span>
        <p class="text-lg font-lg font-nunito">
          Monitorea tu avance y establece metas para tus estudios.
        </p>
        <p class="text-right text-red-400">
          En desarrollo
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-gray-300">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-graduation text-gray-300 mr-2"></i>
          Aprendizaje Interactivo
        </span>
        <p class="text-lg font-lg font-nunito">
          Interactúa con el contenido a través de juegos de palabras y ejercicios interactivos.
        </p>
      </div>
      <div class="flex flex-col p-6 rounded-xl border-2 border-gray-300">
        <span class="text-2xl font-bold mb-6">
          <i class="icon icon-translate text-gray-300 mr-2"></i>
          Múltiples Idiomas
        </span>
        <p class="text-lg font-lg font-nunito">
          Soporte para múltiples idiomas con terminología científica y matemática especializada.
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
