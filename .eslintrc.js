module.exports = {
  extends: '@mate-academy/eslint-config-react',
  rules: {
    "jsx-a11y/label-has-associated-control": [2, { assert: "either" }],
    "no-shadow": 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  }
};
