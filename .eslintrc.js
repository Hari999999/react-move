module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '16.4',
    }
  },
  plugins: ['react', 'babel'],
  rules: {
    'react/jsx-uses-vars': 2,
    'react/no-deprecated': 0,
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
}
  