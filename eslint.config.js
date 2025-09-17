import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  { 
    rules: {
      // On ajoute nos règles personnalisées ici
      // Semi => `;` obligatoire
      "semi": ["error", "always"],
      // Indentation de 2 espaces
      "indent": ["error", 2],
      "quotes": ["error", "single"],
    }
  }
]);
