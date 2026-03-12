import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  base: '/library/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    ghPages,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
