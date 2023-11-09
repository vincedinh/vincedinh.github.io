/* eslint-env node */
module.exports = {
  // necessary to recognize "document" elements since they are not explicitly defined in my JS code
  env: { 
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
};