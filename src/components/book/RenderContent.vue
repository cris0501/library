<template>
  <template v-if="typeof item === 'string'">
    {{ item }}
  </template>

  <template v-else-if="item && item.kind">
    <template v-if="item.kind === 'paragraph'">
      <div class="display-block my-4"></div>
    </template>
  
    <template v-if="item.kind === 'newline'">
      <br /><br />
    </template>

    <strong v-else-if="item.kind === 'bold'" class="font-bold font-nunito">
      <RenderContent 
        v-for="(subItem, index) in item.content" 
        :key="index" 
        :item="subItem" 
      />
    </strong>

    <em v-else-if="item.kind === 'italic'" class="italic font-nunito">
      <RenderContent 
        v-for="(subItem, index) in item.content" 
        :key="index" 
        :item="subItem" 
      />
    </em>

    <template v-else-if="item.kind === 'math'">
      <Equation :raw="item.raw" :displayMode="item.mode === 'display'" />
    </template>

    <template v-else-if="item.kind === 'list'">
      <OrderList :content="item.content" v-if="item.ordered" />
      <UnorderList :content="item.content" v-else />
    </template>

    <template v-else-if="item.kind === 'note'">
      <Note :title="item.params?.join(', ')" :content="item.content" />
    </template>

  </template>
</template>

<script setup>
  import Equation from './Equation.vue'
  import OrderList from './OrderList.vue'
  import UnorderList from './UnorderList.vue'
  import Note from './Note.vue'

  defineProps({
    item: { required: true }
  })
</script>

