import { defineConfig } from "vite";

export default defineConfig({
  base: "./portfolio-kaboom",
  build: {
    minify: "terser",
  },
});
