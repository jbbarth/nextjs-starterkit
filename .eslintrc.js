module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parser: "babel-eslint",
  rules: {
    // Allow the eslint autofixer to fix trailing spaces
    "no-trailing-spaces": 2,

    // Returning nothing from callback is OK
    "array-callback-return": 0,

    //Because it is not worth it to remove all the unused vars for now
    "no-unused-vars": 0,

    // Temporarily disable the "missing key on ..." warning because it is emitted in cases
    // we don't want to have `key` on the elements (when passing addons to panels, views to charts
    // or chartOptions as arrays)
    "react/jsx-key": 0,

    // We have a lot of functional components for which it is difficult
    // to add a displayName or propTypes
    "react/display-name": 0,
    "react/prop-types": 0,

    // Allow "useless" escape of characters in RegExp; could be false-positive
    "no-useless-escape": 0,

    // This rule throws an error when it encounters characters such as ' or > in JSX
    "react/no-unescaped-entities": 0,

    // Do not throw an error on `import * as ... from ...`
    "import/namespace": ['error', { allowComputed: true }],

    // Do not warn against doing `import bar from 'foo'` when bar is also a named export in foo.js
    "import/no-named-as-default": 0,

    // Do not warn against doing `ChartPanel.TEMPLATES` when ChartPanel also has a `TEMPLATES` named export
    "import/no-named-as-default-member": 0,

    // Restrict find as a global because for us it's lodash function not the
    // browser one
    "no-restricted-globals": [2, "find"],

    // Emit an error on useless expressions
    // (like when we forgot to add () at the end of functions)
    "no-unused-expressions": 2,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: "16.2.0",
    },
  },
}
