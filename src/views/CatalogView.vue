<template>
  <!-- Header -->
  <div class="flex flex-col justify-center min-h-[35dvh] bg-yellow-400 rounded-b-[35px] pt-8 pb-10 px-6 lg:px-24 mb-8">
    <span class="font-plex font-bold text-5xl mb-3">Catálogo de Libros</span>
    <p class="font-nunito text-lg text-gray-800 mb-6">
      Explora nuestra colección de libros virtuales creados por estudiantes y profesores. Todo el conocimiento, libre y accesible.
    </p>
    <div class="relative w-full max-w-xl">
      <i class="icon icon-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl"></i>
      <input
        v-model="search"
        type="text"
        placeholder="Buscar por título, autor o tema..."
        class="w-full pl-11 pr-4 py-3 rounded-xl bg-white shadow-sm font-nunito text-gray-700 outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>
  </div>

  <!-- Filters + count + view toggle -->
  <div class="flex flex-col md:flex-row md:items-center justify-between px-6 lg:px-24 mb-6 gap-3">
    <div class="flex items-center gap-2 flex-wrap">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        :class="[
          'px-4 py-1.5 rounded-full font-nunito text-sm font-semibold transition-colors',
          activeCategory === cat
            ? 'bg-gray-900 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        ]"
      >
        {{ cat }}
      </button>
    </div>
    <div class="flex items-center gap-3">
      <span class="font-nunito text-sm text-gray-500">{{ filteredBooks.length }} libros encontrados</span>
      <button @click="gridView = true" :class="['p-1.5 rounded', gridView ? 'bg-gray-200' : 'hover:bg-gray-100']">
        <i class="icon icon-grid text-gray-600 text-lg"></i>
      </button>
      <button @click="gridView = false" :class="['p-1.5 rounded', !gridView ? 'bg-gray-200' : 'hover:bg-gray-100']">
        <i class="icon icon-list text-gray-600 text-lg"></i>
      </button>
    </div>
  </div>

  <!-- Book Grid -->
  <div
    :class="[
      'px-6 lg:px-24 pb-16',
      gridView
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        : 'flex flex-col gap-4'
    ]"
  >
    <RouterLink
      v-for="book in filteredBooks"
      :key="book.id"
      :to="{ name: 'book', params: { name: book.id } }"
      class="block"
    >
      <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
        <!-- Colored header -->
        <div :class="['h-28 flex items-end p-4', book.color]">
          <span class="text-xs font-bold uppercase tracking-wide text-white bg-white/20 px-2 py-0.5 rounded-full">
            {{ book.category }}
          </span>
        </div>
        <!-- Content -->
        <div class="p-4 flex flex-col gap-1">
          <span class="font-plex font-bold text-lg text-gray-900 leading-snug">{{ book.title }}</span>
          <span class="font-nunito text-sm text-gray-500">{{ book.author }}</span>
          <p class="font-nunito text-sm text-gray-600 mt-1 line-clamp-2">{{ book.description }}</p>
          <div class="flex items-center gap-4 mt-3 text-xs text-gray-400 font-nunito">
            <span><i class="icon icon-file mr-1"></i>{{ book.pages }} págs</span>
            <span><i class="icon icon-edit mr-1"></i>{{ book.activities }} actividades</span>
            <span class="ml-auto">{{ book.date }}</span>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { RouterLink } from 'vue-router'

  const search = ref('')
  const activeCategory = ref('Todos')
  const gridView = ref(true)

  const categories = ['Todos', 'Matemáticas', 'Física', 'Composición', 'Química']

  const books = [
    {
      id: 'logica',
      title: 'Lógica Matemática',
      author: 'Cristian Ramírez',
      description: 'Fundamentos de lógica proposicional, predicados, demostraciones y teoría de conjuntos.',
      category: 'Matemáticas',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      pages: 20,
      activities: 0,
      date: '13/01/2026',
    },
    {
      id: 'test',
      title: 'Libro de Prueba',
      author: 'Equipo EduWords',
      description: 'Contenido de demostración para probar el compilador y los componentes del visor.',
      category: 'Composición',
      color: 'bg-gradient-to-br from-emerald-400 to-teal-600',
      pages: 4,
      activities: 3,
      date: '01/01/2025',
    },
  ]

  const filteredBooks = computed(() => {
    return books.filter(b => {
      const matchesCategory = activeCategory.value === 'Todos' || b.category === activeCategory.value
      const q = search.value.toLowerCase()
      const matchesSearch = !q
        || b.title.toLowerCase().includes(q)
        || b.author.toLowerCase().includes(q)
        || b.description.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  })
</script>
