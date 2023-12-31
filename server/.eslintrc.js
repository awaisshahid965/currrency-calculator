module.exports = {
    plugins: ['prettier'],
    extends: [
      'eslint:recommended',
      "plugin:@typescript-eslint/recommended",
      'plugin:prettier/recommended',
    ],
    parser: "@typescript-eslint/parser",
    rules: {
      'prettier/prettier': ['error'],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "never"],
    },
};