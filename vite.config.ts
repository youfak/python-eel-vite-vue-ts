import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import { join } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
// https://vitejs.dev/config/
function resolve(dir: string) {
  return join(__dirname, dir)
}

export default defineConfig({
  mode: process.env.NODE_ENV,
  server: {
    host: 'localhost',
    port: 9100,
  },
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
      '@': resolve('src'),
      '@hooks': resolve('src/hooks'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@images': resolve('src/assets/images'),
      '@views': resolve('src/views'),
      '@store': resolve('src/store'),
    },
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.html'],
  },
  build: {
    outDir: resolve('/web'),
    emptyOutDir: true,
    target: 'esnext',
    minify: 'esbuild',
  },
  plugins: [
    vuePlugin({
      script: {
        refSugar: true,
      },
    }),
    createHtmlPlugin({
      minify: true,
      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          title: 'index',
          injectScript:
            process.env.NODE_ENV === 'production'
              ? `<script src="/eel.js"></script>`
              : `<script src="http://localhost:9000/eel.js"></script><script>window.eel.set_host("ws://localhost:9000");</script>`,
        },
      },
    }),
  ],
  optimizeDeps: {},
})
