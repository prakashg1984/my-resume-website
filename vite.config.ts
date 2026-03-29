import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: [
      'prakash-personal-resume-2063012980.us-east-2.elb.amazonaws.com',
      'localhost',
      '127.0.0.1'
    ],
  },
  base: '/personal-website/', // Replace with your repo name
})
