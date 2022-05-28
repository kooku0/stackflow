module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "prettier"],
  plugins: ["json-format", "simple-import-sort"],
  rules: {
    "no-undef": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/function-component-definition": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": "off",
  },
  ignorePatterns: ["**/__generated__/**/*", "**/lib/**/*", "**/dist/**/*"],
};
