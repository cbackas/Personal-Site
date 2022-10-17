module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    "next",
    "next/core-web-vitals"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    "@next/next/no-img-element": "off"
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
