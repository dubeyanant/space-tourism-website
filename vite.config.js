import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
        crew: "/crew.html",
        destination: "/destination.html",
        technology: "/technology.html",
      },
    },
  },
});
