import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',    // <-- Esto permite acceso desde red local
    port: 5173,         // <-- Puedes cambiar si el puerto está ocupado
    hmr: false,         // <--- desactiva el hot module replacement
    strictPort: true,   // <-- Da error si el puerto está ocupado, útil en debugging
    open: false,        // <-- No abre navegador automáticamente
    cors: true,         // <-- Habilita CORS (por si hay recursos externos)
    watch: {
      usePolling: true, // <-- A veces necesario para redes locales o sistemas de archivos compartidos
    }
  }
})
