<template>
  <template v-if="item.type === 'new_line'">
    <br /><br />
  </template>

  <span v-else-if="item.type === 'text'" class="inline font-nunito">{{ item.content }}</span>

  <Equation v-else-if="item.type === 'equation'" :content="item.content" />

  <Note
    v-else-if="item.type === 'note'"
    :title="item.title.content"
    :content="item.content.content"
  />

  <Block v-else-if="item.type === 'block'" :items="item.items" />

  <BlockMath v-else-if="item.type === 'block_math'" :content="item.content" />

  <OrderList v-else-if="item.type === 'order_list'" :content="item.content" />

  <UnorderList v-else-if="item.type === 'unorder_list'" :content="item.content" />

  <BookImage
    v-else-if="item.type === 'image'"
    :style="item.style.content"
    :url="item.url.content"
    :content="item.content.content"
  />

  <Alert v-else-if="item.type === 'alert'" :title="item.content[0].content" />
</template>

<script setup>
import Equation from './Equation.vue'
import Note from './Note.vue'
import Block from './Block.vue'
import BlockMath from './BlockMath.vue'
import OrderList from './OrderList.vue'
import UnorderList from './UnorderList.vue'
import BookImage from './BookImage.vue'
import Alert from './Alert.vue'

defineProps({
  item: { type: Object, required: true }
})
</script>
