import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/fantasyshop/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate', // 서비스워커 자동 갱신
      manifest: {
        name: 'Fantasy Shop',
        short_name: 'Fantasy Shop',
        description: '전설의 검, 활, 방패 등을 살 수 있는 판타지 상점',
        theme_color: '#6366F1',
        icons: [
          {
            src: 'pwa-192x192.png', // public 폴더에 아이콘 넣기
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // workbox 옵션 필요 시 추가
      },
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
