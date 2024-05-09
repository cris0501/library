import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
      "@views": resolve(__dirname, 'src/views'),
      "@components": resolve(__dirname, 'src/components'),
      "@assets": resolve(__dirname, 'src/assets'),
      "@styles": resolve(__dirname, 'src/assets/styles'),
      "@utils": resolve(__dirname, 'src/utils')
    }
  }
})
