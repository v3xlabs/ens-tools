// eslint-disable-next-line no-undef
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
    },
    extends: ['plugin:v3xlabs/recommended'],
    ignorePatterns: ['!**/*', 'tests'],
    plugins: ['v3xlabs'],
    env: {
        browser: true,
    },
    rules: {
        'unicorn/no-null': 'off',
    },
};
