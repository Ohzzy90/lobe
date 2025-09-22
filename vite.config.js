import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        examples: 'examples.html',
        tour: 'tour.html',
        blog: 'blog.html',
        help: 'help.html'
      }
    }
  }
})