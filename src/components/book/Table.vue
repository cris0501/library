<template>
  <div class="table-wrap w-full max-w-full overflow-x-auto my-6">
    <table class="border-collapse mx-auto w-max">
      <tbody>
        <template v-for="(row, rowIndex) in item.rows" :key="rowIndex">
          <!-- Horizontal line row -->
          <tr v-if="row.hline">
            <td
              :colspan="item.columns.length"
              class="border-t border-gray-700 p-0"
            ></td>
          </tr>

          <!-- Data row -->
          <tr v-else-if="row.cells">
            <td
              v-for="(cell, colIndex) in row.cells"
              :key="colIndex"
              :class="cellClasses(colIndex)"
            >
              <RenderContent
                v-for="(subItem, i) in cell"
                :key="i"
                :item="subItem"
              />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import RenderContent from './RenderContent.vue'

const props = defineProps({
  item: { required: true }
})

const alignClass = {
  center: 'text-center',
  right:  'text-right',
  left:   'text-left',
}

function cellClasses(colIndex) {
  const col = props.item.columns[colIndex] || {}
  return [
    'px-4 py-1',
    alignClass[col.align] || 'text-left',
    col.border_right ? 'border-r border-gray-700' : '',
  ]
}
</script>
