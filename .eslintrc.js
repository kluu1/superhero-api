module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'strict': 'off',
    'no-console': 'off',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single']
  },
};
