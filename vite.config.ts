import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Three.js ecosystem → dedicated chunk (lazy-loaded with HeroScene)
          if (
            id.includes('node_modules/three') ||
            id.includes('node_modules/@react-three')
          ) {
            return 'vendor-three';
          }
          // GSAP
          if (id.includes('node_modules/gsap')) {
            return 'vendor-gsap';
          }
          // Radix UI primitives
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-radix';
          }
          // React core
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/')
          ) {
            return 'vendor-react';
          }
        },
      },
    },
  },
});
