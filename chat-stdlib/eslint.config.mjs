import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.es2023 },
      parserOptions: {
        ecmaVersion: "latest",
        project: true,
        tsconfigDirName: import.meta.dirname,
        sourceType: "module",
      },
    },
  },
  {
    files: ["tests/**/*.ts"],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
    },
    ...tseslint.configs.disableTypeChecked,
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
];
