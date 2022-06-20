module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: { ecmaVersion: 2021 },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
  ],
  plugins: ["import", "jsx-a11y", "react", "react-hooks"],
  root: true,
  rules: {
    // occur error in `import React from 'react'` with react-scripts 4.0.1
    "no-use-before-define": "off",
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "_",
        ignoreRestSiblings: false,
        varsIgnorePattern: "_"
      }
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline"
      }
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true
      }
    ],
    "no-void": [
      "error",
      {
        allowAsStatement: true
      }
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return"
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"]
      }
    ],
    "react/jsx-props-no-spreading": [
      "error",
      {
        html: "enforce",
        custom: "enforce",
        explicitSpread: "ignore"
      }
    ],
    "react/react-in-jsx-scope": "off"
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/prop-types": "off"
      }
    }
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  }
};
