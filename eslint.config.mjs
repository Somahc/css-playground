import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import typescriptEslintParser from '@typescript-eslint/parser'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'
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
        languageOptions: {
            parser: typescriptEslintParser,
            parserOptions: {
                project: true,
                sourceType: 'module',
            },
        },
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            '@typescript-eslint/prefer-includes': 'error',
        },
    },
]
