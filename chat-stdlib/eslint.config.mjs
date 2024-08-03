import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    rules: {
      "prefer-const": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-params": "off",
    },
  },
  {
    files: ["tests/**/*.ts"],
    ...tseslint.configs.disableTypeChecked,
    env: { node: true, jest: true },
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
];
