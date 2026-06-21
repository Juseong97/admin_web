import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import * as path from "node:path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss()
  ],

  //서버 포트 설정
  server : {
    // port : 5173,
    strictPort : true
  },

  resolve: {
      alias: {
          '@': path.resolve(__dirname, './src'),
      },
  },
})
