import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


export default defineConfig({
  plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname,'./src/components'),
        '@templates': path.resolve(__dirname, './src/templates'),
        '@domain': path.resolve(__dirname, './src/domain'),
        '@ui-components': path.resolve(__dirname, './src/ui/components'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@context': path.resolve(__dirname, './src/context'),
      },
}})
