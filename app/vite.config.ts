import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: "../build",
    sourcemap: "hidden",
  },
  envDir: "../",
  plugins: [react()],
  root: "src",
  server: {
    port: 3000,
  },
});
