import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: (id: string) => {
        // 将 public 下的视频资源标记为外部，避免打包时尝试解析
        if (id.startsWith('/videos/') || id.startsWith('/audio/') || id.startsWith('/assets/')) {
          return true
        }
        return false
      },
    },
  },
})
