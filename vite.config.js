import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@componentes': path.resolve(__dirname, 'src/componentes'),
      '@paginas': path.resolve(__dirname, 'src/paginas'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      // outros atalhos se quiser
    },
  },
})
