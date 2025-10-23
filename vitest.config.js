import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom', // You could also use 'happy-dom'
  },
});