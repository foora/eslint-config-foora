module.exports = {
    extends: [
        './index.js',
        'plugin:vue/base'
    ],
    rules: {
        // Possible Error
        'vue/no-dupe-keys': 'off',
        'vue/no-parsing-error': 'error',
        'vue/no-reservered-keys': 'error',
        'vue/no-shared-component-data': 'off',
        'vue/no-template-key': 'off',
        'vue/require-render-return': 'error',
        'vue/require-valid-default-prop': 'off',
        'vue/return-in-computed-property': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-text': 'error',
        // Best Practices
        'vue/html-end-tags': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-confusing-v-for-v-if': 'error',
        'vue/no-duplicate-attributes': 'error',
        'vue/no-side-effects-in-computed-properties': 'off',
        'vue/no-textarea-mustache': 'error',
        'vue/order-in-components': 'error',
        'vue/require-component-is': 'error',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/require-v-for-key': 'error',
        'vue/this-in-template': 'error',
        // Stylistic Issues
        'vue/attribute-hyphenation': 'off',
        'vue/html-quotes': 'error',
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/mustache-interpolation-spacing': 'error',
        'vue/name-property-casing': 'off',
        'vue/no-multi-spaces': 'error',
        'vue/v-bind-style': 'off',
        'vue/v-on-style': 'off',
        // Variables
        'vue/jsx-uses-vars': 'error'
    }
};