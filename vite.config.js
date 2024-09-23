import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Using "/api" as a prefix for routes that need to be proxied
      "/api": {
        target: "https://api.sjamrutsolutions.com", // The base URL of your API
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove the /api prefix
      },
    },
  },
});
