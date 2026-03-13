<template>
  <figure 
    :class="[
      'my-4 block overflow-hidden', 
      isSmall ? 'float-left mr-6 mb-2' : 'mx-auto'
    ]"
    :style="{ width: displayWidth }"
    v-bind="item.target ? { id: item.target } : {}" 
  >
    <template v-for="(subItem, i) in item.content" :key="i">
      
      <img
        v-if="subItem.kind === 'image'"
        :src="bookUrl+subItem.params[0]"
        class="w-full h-auto rounded-lg shadow-md"
        :alt="captionText"
      />

      <figcaption
        v-else-if="subItem.kind === 'caption'"
        class="mt-2 text-center text-xs text-gray-500 italic font-nunito leading-relaxed"
      >
        <RenderContent 
          v-for="(c, j) in subItem.content" 
          :key="'cap-'+j" 
          :item="c" 
        />
      </figcaption>
      
    </template>
  </figure>
</template>

<script setup>
  import { computed } from 'vue'
  import RenderContent from './RenderContent.vue'

  const book = "test" // ToDo> Implement {nameBook} in router
  const bookUrl = `${import.meta.env.BASE_URL}books/${book}/`

  const props = defineProps({
    item: { type: Object, required: true }
  })

  const imageData = computed(() => 
    props.item.content.find(i => i.kind === 'image')
  )

  const widthValue = computed(() => {
    const opt = imageData.value?.options?.[0]
    return opt ? parseInt(opt) : 100
  })

  // 3. ¿Es pequeña para flotar? (Tu regla de 60% o menos)
  const isSmall = computed(() => widthValue.value <= 60)

  // 4. Estilo de ancho final
  const displayWidth = computed(() => `${widthValue.value}%`)

  // Para accesibilidad
  const captionData = computed(() => 
    props.item.content.find(i => i.kind === 'caption')
  )
</script>

