module.exports = {
  extends: [
    // '@react-native-community',
    // "@react-native",

    "plugin:jsdoc/recommended-error",
    "plugin:import/recommended",
    /** Turns off all rules that are unnecessary or might conflict with Prettier. */
    "prettier"
  ],
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  globals: {
    EDB_Matter: true
  },
  ignorePatterns: ["node_modules/*"],
  plugins: [
    "@typescript-eslint",
    "import",
    "jsdoc",
    "unused-imports",
    "prettier",
    "sort-keys"
  ],
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["warn"]
      }
    }
  ],
  env: {
    jest: true,
    node: true
  },
  rules: {
    // disable the rule for all files
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit"
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": ["error"],
    "@typescript-eslint/member-ordering": ["error"],
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-shadow": "error",
    "arrow-body-style": ["error", "as-needed"],
    "import/default": "off",
    "import/export": 2,
    "import/first": 2,
    "import/named": "off",
    "import/namespace": "off",
    "import/no-cycle": [
      2,
      {
        maxDepth: 1
      }
    ],
    "import/no-duplicates": [
      "error",
      {
        "prefer-inline": true
      }
    ],
    "import/no-dynamic-require": 2,
    "import/no-empty-named-blocks": 2,
    "import/no-relative-packages": "off",
    "import/no-self-import": "error",
    "import/no-unresolved": "off",
    "import/no-unused-modules": "error",
    "import/order": [
      "error",
      {
        groups: [
          "index",
          "sibling",
          "parent",
          "internal",
          "external",
          "builtin",
          "object",
          "type"
        ]
      }
    ],
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    // "jsdoc/newline-after-description": "error",
    "jsdoc/require-param": "off",
    "jsdoc/require-returns": "off",
    "jsdoc/require-returns-type": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "lines-between-class-members": ["warn", "always"],
    "max-classes-per-file": ["error", 1],
    "no-bitwise": "off",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
      {
        allow: [
          "warn",
          "dir",
          "time",
          "timeEnd",
          "timeLog",
          "trace",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "debug",
          "info",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-debugger": "error",
    "no-empty": "error",
    "no-empty-function": "off",
    "no-eval": "error",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-mixed-spaces-and-tabs": "error",
    "no-new-wrappers": "error",
    "no-shadow": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "off",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-var": "error",
    "no-void": "off",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-const": "error",
    // "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/react-in-jsx-scope": "off",
    // "sort-keys": [
    //   "error",
    //   "asc",
    //   { caseSensitive: true, natural: false, minKeys: 2 },
    // ],
    "sort-keys": 0, // disable default eslint sort-keys
    "sort-keys/sort-keys-fix": 1,
    // indent: ["error", "tab"],
    "spaced-comment": [
      "error",
      "always",
      {
        markers: ["/"]
      }
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_"
      }
    ]
  }
};
