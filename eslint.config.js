import globals from 'globals';
import js from '@eslint/js';
import solid from 'eslint-plugin-solid/configs/typescript.js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['build/', 'dist/', '.vscode/', 'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock'],
  },
  // https://github.com/solidjs-community/eslint-plugin-solid?tab=readme-ov-file#flat-configuration
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ...solid,
    languageOptions: {
      globals: {
        ...globals.browser,
        // `'readonly'` is equivalent to setting the value as `false`
        chrome: 'readonly',
      },
    },
    rules: {
      ...solid.rules,
      'no-duplicate-imports': 'error',
    },
  },
  eslintConfigPrettier,
);
