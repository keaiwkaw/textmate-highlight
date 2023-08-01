<script setup>
import * as monaco from "monaco-editor";
import { onMounted } from "vue";
import { loadWASM } from "onigasm"; // peer dependency of 'monaco-textmate'
import { Registry } from "monaco-textmate"; // peer dependency
import { wireTmGrammars } from "monaco-editor-textmate";
import darkPlus from "../static/themes-cooked/OneDark-Pro_cooked.json";
import vueCode from "./tmp";
import ReactCodeString from "./react";

async function liftOff() {
  const res = await fetch("/onigasm.wasm");
  const arrayBuffer = await res.arrayBuffer();
  await loadWASM(arrayBuffer);
  const registry = new Registry({
    getGrammarDefinition: async (scopeName) => {
      return {
        format: "json",
        content: await (
          await fetch(`../static/grammars/JavaScriptReact.tmLanguage.json`)
        ).text(),
      };
    },
  });

  const grammars = new Map();
  // grammars.set("vue", "source.vue");
  grammars.set("react", "source.js.jsx");

  monaco.languages.register({ id: "react" });
  monaco.editor.defineTheme("vs-code-theme-converted", darkPlus);

  var editor = monaco.editor.create(document.querySelector(".editor"), {
    value: ReactCodeString,
    language: "react",
    theme: "vs-code-theme-converted",
  });
  monaco.editor.setModelLanguage(editor.getModel(), "react");

  await wireTmGrammars(monaco, registry, grammars, editor);
}

onMounted(async () => {
  await liftOff();
});
</script>

<template>
  <div>
    <div class="editor"></div>
  </div>
</template>

<style scoped>
.editor {
  width: 100vw;
  height: 100vh;
}
</style>
