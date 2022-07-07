module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it onlyreact for TypeScript files
      },
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "@typescript-eslint/naming-convention": 1,
    "@typescript-eslint/no-shadow": 1,
    "@typescript-eslint/no-unused-vars": 1,
    "no-nested-ternary": 1,
    "react/require-default-props": 1,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/button-has-type": 1,
    "react/no-array-index-key": 1,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "max-len": 1,
    "no-plusplus": 1,
    "no-param-reassign": 1,
    "no-useless-escape": 1,
    "import/prefer-default-export": 0,
  },
};
