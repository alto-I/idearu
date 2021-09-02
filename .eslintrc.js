module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:flowtype/recommended',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['babel', 'flowtype', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/require-default-props': 'off',
    'flowtype/no-types-missing-file-annotation': 'off',
    'flowtype/define-flow-type': 'warn',
    'flowtype/use-flow-type': 'warn',
    'no-console': 'off',
  },
}
