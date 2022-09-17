module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["next", "next/core-web-vitals", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "unused-imports"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off", // or "no-unused-vars"
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],
  },
};
