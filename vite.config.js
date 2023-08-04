import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build' // Change this to the desired output directory
  },
  server: {
    // port: 8001,
  },
});
