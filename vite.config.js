import { defineConfig } from "vite";
// import monacoPlugin from "vite-plugin-monaco-editor";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // monacoPlugin.default({
    //   languageWorkers: [
      
    //   ],
    // }),
  ],
});
