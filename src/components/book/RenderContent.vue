<template>
  <template v-if="typeof item === 'string'">
    {{ item }}
  </template>

  <template v-else-if="item && item.kind">
    <span v-if="item.id" :id="item.id"></span>

    <template v-if="item.kind === 'heading'">
      <span v-if="item.chapter_index" :id="'chapter:'+item.chapter_index"></span> <!-- Reference id -->
      <div :class="{
        'w-full': true,
        'border-b': true,
        'p-3': true,
        'my-12': item.level === 0,
        'my-8': item.level === 0,
      }">
        <span 
          :class="{
            'text-4xl': item.level === 0,
            'text-2xl': item.level === 1,
            'text-xl': item.level > 1,
            'font-bold': true
          }"
        >
          <template v-if="item.level == 0">
            {{ item.chapter_index + '. ' + item.content[0] }}
          </template>
          <template v-else>
            {{ item.content[0] }}
          </template>
        </span>
      </div>
    </template>

    <template v-else-if="item.kind === 'paragraph'">
      <div class="display-block my-4"></div>
    </template>

    <template v-else-if="item.kind === 'backslash'">
      <span class="display-inline ml-2">\</span>
    </template>

    <template v-else-if="item.kind === 'newline'">
      <br /><br />
    </template>

    <template v-else-if="item.kind === 'figure'">
      <Figure :item="item" />
    </template>

    <template v-else-if="item.kind === 'math'">
      <Equation :raw="item.raw" :displayMode="item.mode === 'display'" />
    </template>

    <template v-else-if="item.kind === 'list'">
      <List :content="item.content" :ordered="item.ordered" />
    </template>

    <template v-else-if="item.kind === 'block'">
      <Block :items="item.content" />
    </template>

    <template v-else-if="item.kind === 'note'">
      <Note :title="item.params?.title" :content="item.content" />
    </template>

    <template v-else-if=" propositionTypes.has(item.kind)">
      <Proposition
        :kind="item.kind"
        :title="item.params?.title"
        :content="item.content"
      />
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

    <a
      v-else-if="item.kind === 'url'"
      :href="item.content[0]"
      class="text-amber-600 hover:text-amber-700 underline"
      target="_blank"
      rel="noopener"
    >
      {{ item.content[0] }}
    </a>

    <span
      v-else-if="textStyles[item.kind]"
      :class="textStyles[item.kind]"
    >
      <RenderContent
        v-for="(subItem, index) in item.content"
        :key="index"
        :item="subItem"
      />
    </span>

  </template>
</template>

<script setup>
  import { inject } from 'vue'
  import Equation from './Equation.vue'
  import List from './List.vue'
  import Note from './Note.vue'
  import Block from './Block.vue'
  import Figure from './Figure.vue'
  import Proposition from './Proposition.vue'

  defineProps({
    item: { required: true }
  })

  const  propositionTypes = new Set([
    'definition', 'axiom', 'theorem', 'lemma',
    'proposition', 'corollary', 'exercise',
    'convention', 'proof',
  ])
  
  const textStyles = {
    bold:       'font-bold font-nunito',
    italic:     'italic font-nunito',
    underline:  'underline',
    monospace:  'font-mono text-sm bg-gray-100 px-1 rounded',
    smallcaps:  'smallcaps',
    sansserif:  'font-sans',
  }

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
