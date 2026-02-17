import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: '/notifyme.html',
  },
  build: {
    rollupOptions: {
      input: {
        main: 'notifyme.html',
      },
    },
  },
});
