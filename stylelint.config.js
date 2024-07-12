export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        'stylelint-config-prettier-scss',
    ],
    plugins: ['stylelint-scss'],
    rules: {
        'function-name-case': null,
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': [
            true,
            { ignorePseudoClasses: 'export' },
        ],
        'selector-no-vendor-prefix': null,
        'property-no-unknown': [true, { ignoreProperties: /[a-zA-Z]+/ }],
        'property-no-vendor-prefix': null,
        'no-invalid-position-at-import-rule': null,
        'scss/at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'import',
                    'function',
                    'if',
                    'each',
                    'include',
                    'mixin',
                    'else',
                    'return',
                    'use',
                ],
            },
        ],
        'no-descending-specificity': null,
        'scss/dollar-variable-pattern': /[a-z][a-zA-Z]+./,
        'scss/at-mixin-pattern': /[a-z][a-zA-Z]+/,
    },
};
