<template>
  <template v-if="typeof item === 'string'">
    {{ item }}
  </template>

  <template v-else-if="item && item.kind">
    <template v-if="item.kind === 'paragraph'">
      <div class="display-block my-4"></div>
    </template>
    
    <template v-else-if="item.kind === 'backslash'">
      <span class="display-inline ml-2">\</span>
    </template>
  
    <template v-if="item.kind === 'newline'">
      <br /><br />
    </template>
    
    <template v-else-if="item.kind === 'figure'">
      <Figure :item="item" />
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
      <Equation
        :raw="item.raw"
        :displayMode="item.mode === 'display'"
        :id="item.id"
      />
    </template>

    <template v-else-if="item.kind === 'list'">
      <List :content="item.content" :ordered="item.ordered" :id="item.id"/>
    </template>
    
    <template v-else-if="item.kind === 'label'">
      <div :id="item.id" class="inline"></div>
    </template>
    
    <template v-else-if="item.kind === 'block'">
      <Block :items="item.content" />
    </template>

    <template v-else-if="item.kind === 'note'">
      <Note :title="item.params?.join(', ')" :content="item.content" />
    </template>

    <template v-else-if="item.kind === 'ref'">
      <a
        :href="'book#' + item.target"
        class="inline cursor-pointer text-amber-600 hover:text-amber-700 underline mx-2"
        @click.prevent="handleRefClick(item.target)"
      >
        {{ findRef(item.target) }}
      </a>
    </template>

  </template>
</template>

<script setup>
  import { inject } from 'vue'
  import Equation from './Equation.vue'
  import List from './List.vue'
  import Note from './Note.vue'
  import Block from './Block.vue'
  import Figure from './Figure.vue'

  defineProps({
    item: { required: true }
  })

  const _refs = inject('refs')
  const refsData = _refs?.value || _refs
  const savePosition = inject('savePosition')
  const navigationStack = inject('navigationStack')
  
  const findRef = (_id) => {
    if (_id && refsData && _id in refsData) {
      return `(${refsData[_id].index})`
    }
    
    return '[?]'
  }

  const handleRefClick = (target) => {
    if (navigationStack) {
      navigationStack.value.push(window.scrollY)
    }
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
</script>




