module.exports = {
  extends: ['airbnb-base', 'plugin:vue/recommended'],

  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true
  },

  globals: {
    window: false,
    document: false,
    location: false,
    navigator: false
  },

  rules: {
    'func-names': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'default-case': 0,
    'prefer-template': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'operator-linebreak': 0,
    'import/no-unresolved': 0,
    'object-curly-newline': 0,
    'no-unused-expressions': 0,
    'max-len': ['error', { 'code': 150 }],
    'vue/no-v-html': 0,
    'vue/attributes-order': 0,
    'vue/require-v-for-key': 0,
    'vue/require-default-prop': 0,
    'vue/no-unused-components': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ]
  }
};
