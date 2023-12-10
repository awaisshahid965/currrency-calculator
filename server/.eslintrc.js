module.exports = {
    plugins: ['prettier'],
    extends: [
      'eslint:recommended',
      "plugin:@typescript-eslint/recommended",
      'plugin:prettier/recommended',
    ],
    parser: "@typescript-eslint/parser",
    rules: {
      'prettier/prettier': ['error', { configFile: '../.prettierrc', ignorePath: '../.prettierignore' }],
    },
};