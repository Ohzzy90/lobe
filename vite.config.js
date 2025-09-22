import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        examples: 'examples.html',
        tour: 'tour.html',
        blog: 'blog.html',
        help: 'help.html'
      }
    }
  }
})