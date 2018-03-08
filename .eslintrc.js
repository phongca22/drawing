// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [2, 4],
    'quotes': [2, 'single'],
    'semi': ['error', 'always'],
    'brace-style': [2, '1tbs'],
    'array-bracket-spacing': [2, 'never'],
    'camelcase': [2, {'properties': 'always'}],
    'keyword-spacing': [2],
    'eol-last': [2],
    'no-trailing-spaces': [2],
    'no-throw-literal': 0
  }
}
