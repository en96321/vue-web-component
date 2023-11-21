const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteVueCESubStyle } from '@unplugin-vue-ce/sub-style'
// import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      'process.env': {}
    },
    build: {
      lib: {
        entry: 'src/build.js',
        name: 'apollo',
        fileName: 'apollo',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    },
    plugins: [
      vue({
        customElement: mode === 'production'
      }),
      // vueJsx(),
      viteVueCESubStyle()
    ]
  }
})
