import { fileURLToPath, Url } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    '@': fileURLToPath(new Url(import.meta.url, './src/'))
  }
})
