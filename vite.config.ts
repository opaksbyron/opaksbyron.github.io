import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  // Relative asset paths, so the same build works from a GitHub Pages
  // subpath and from a custom domain root without a rebuild.
  base: "./",
  plugins: [react(), tailwindcss()],
})
