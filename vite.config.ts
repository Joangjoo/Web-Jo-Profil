import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueDevtools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueDevtools({
      launchEditor: "Antigravity",
    }),
  ],
});
