import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Suppress unused vars error
      // Optionally downgrade Next.js rules to warnings (won’t suppress Next.js build errors)
      "@next/next/no-sync-scripts": "warn",
      "@next/next/no-css-tags": "warn",
      "@next/next/no-img-element": "warn",
    },
  },
];

export default eslintConfig;