import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/cur-converter/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@/components/ui': path.resolve(__dirname, './src/shared/components/ui'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
