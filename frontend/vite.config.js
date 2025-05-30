import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows access from Docker and network
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // Enables file watching in Docker
    },
  },
});
