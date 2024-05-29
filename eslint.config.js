import globals from 'globals';
import js from '@eslint/js';
import solid from 'eslint-plugin-solid/configs/typescript.js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    ignores: ['build/', 'dist/', '.vscode/', 'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock'],
  },
  // https://github.com/solidjs-community/eslint-plugin-solid?tab=readme-ov-file#flat-configuration
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...solid.rules,
      'no-duplicate-imports': 'error',
    },
  },
  eslintConfigPrettier,
];
