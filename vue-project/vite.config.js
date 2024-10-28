import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy:{
      '/api':{ //获取路径中含api的请求
        target:'http://localhost:8080',  //后端服务所在源
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')//api替换为空字符串
      }
    }
  }
})
