import { FlatCompat } from "@eslint/eslintrc"
import pluginJs from "@eslint/js"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import globals from "globals"
import path from "path"
import { fileURLToPath } from "url"

// mimic CommonJS variables -- not needed if using CommonJS
const fileName = fileURLToPath(import.meta.url)
const dirName = path.dirname(fileName)
const compat = new FlatCompat({
  baseDirectory: dirName,
  recommendedConfig: pluginJs.configs.recommended,
})

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  ...compat.extends("standard-with-typescript"),
  pluginReactConfig,
  {
    rules: {
      "@typescript-eslint/quotes": ["error", "double"],
      "@typescript-eslint/comma-dangle": ["off"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/react-in-jsx-scope": ["off"],
      "space-before-function-paren": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "no-return-await": "off",
      "@typescript-eslint/return-await": "off",
      "@typescript-eslint/promise-function-async": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-throw-literal": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "multiline-ternary": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
  {
    settings: {
      react: {
        version: "18.2.0",
      },
    },
  },
  {
    files: ["**/*.{ts,tsx,js}"],
    ignores: ["node_modules", "build", "out"],
  },
]
