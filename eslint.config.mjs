import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    {
        ignores: ['node_modules'],
    },
    js.configs.recommended,
    eslintConfigPrettier,
    {
        files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
        },
        rules: {
            ...ts.configs.recommended.rules,
            ...ts.configs['eslint-recommended'].rules,
        },
    },
    // js.configs.recommended,
    // eslintConfigPrettier,
    // ...compat.extends('eslint:recommended'),
    // {
    //     files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    //     languageOptions: {
    //         parser: tsParser,
    //     },
    //     plugins: {
    //         ...ts.configs.recommended.plugins,
    //     },
    //     rules: {
    //         ...ts.configs.recommended.rules,
    //         ...ts.configs['eslint-recommended'].rules,
    //     },
    // },
]
