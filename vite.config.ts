import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative paths work on both GitHub project pages and the custom domain.
  base: './',
})
