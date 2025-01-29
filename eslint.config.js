import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginStorybook from "eslint-plugin-storybook";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  { ignores: ["storybook-static", "!.storybook", "dist"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  ...pluginStorybook.configs["flat/recommended"],
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
