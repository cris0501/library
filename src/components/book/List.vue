<template>
  <div :id="id">
    <ol class="list-decimal my-4 ml-8 space-y-1 font-nunito" v-if="ordered">
      <li v-for="(item, i) in content" :key="'ol-'+i">
        <RenderContent v-for="(sub, j) in item.content" :key="'ol-sub-'+j" :item="sub" />
      </li>
    </ol>

    <ul class="list-decimal my-4 ml-8 space-y-1 font-nunito" v-else>
      <li v-for="(item, i) in content" :key="'ol-'+i">
        <RenderContent v-for="(sub, j) in item.content" :key="'ol-sub-'+j" :item="sub" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import RenderContent from './RenderContent.vue'

defineProps({
  content: { type: Array, required: true },
  ordered: { type: Boolean, default: false },
  id: { type: String, default: null }
})
</script>
