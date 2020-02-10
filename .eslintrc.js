module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi: ['warn', 'never'],
    quotes: ['warn', 'single'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-console': 'off',
  },
}
