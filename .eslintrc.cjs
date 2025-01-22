// eslint-disable-next-line @typescript-eslint/no-require-imports
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-airbnb-with-typescript',
    '@vue/esling-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['**/*.config.ts'],
  rules: {
    'no-var': 'error',
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_NAME === 'production' ? 'error' : 'off',
    '@typescript-esling/no-explict-any': 'error',
    '@typescript-esling/ban-type': 'error',
    '@typescript-esling/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
