// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })

// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  server: {
    port: 3002, // Customize the development server port
  },
  resolve: {
    alias: {
      '@': '/src', // Create custom aliases for your project's directories
    },
  },
  css: {
    preprocessorOptions: {
      // Add any CSS preprocessor options here
    },
  },
};

