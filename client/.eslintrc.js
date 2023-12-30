module.exports = {
  plugins: ['prettier'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error'],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    'no-unused-vars': "off",
  },
};