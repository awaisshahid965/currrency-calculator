module.exports = {
  plugins: ['prettier'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { configFile: '../.prettierrc', ignorePath: '../.prettierignore' }],
    'no-unused-vars': "off"
  },
};