'use strict';

const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules/**', 'assets/**'] },
  js.configs.recommended,
  {
    files: ['*.js'],
    ignores: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: { ...globals.browser },
    },
    rules: {
      // Storage, audio and media cleanup intentionally swallow errors (fail-safe UI).
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-unused-vars': ['error', { caughtErrors: 'none' }],
    },
  },
  {
    files: ['eslint.config.js', 'scripts/**/*.js'],
    // page.evaluate() callbacks in the smoke test run in the browser
    languageOptions: { ecmaVersion: 2022, sourceType: 'commonjs', globals: { ...globals.node, ...globals.browser } },
  },
];
