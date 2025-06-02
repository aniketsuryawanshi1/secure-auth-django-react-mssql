import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // safer if deployed on root

  build: {
    outDir: "dist",
  },

  server: {
    host: "localhost",
    port: 5173,
    strictPort: true,
  },
});
