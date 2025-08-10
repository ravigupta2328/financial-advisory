import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/fire-risk-assessment/',
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['fire-risk-assessment.onrender.com'],
  },
}); 