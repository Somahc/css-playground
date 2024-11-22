import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierConfig from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

export default tseslint.config(
    {
        ignores: ['eslint.config.mjs', 'prettier.config.js'],
    },
    eslint.configs.recommended,
    ...compat.extends('standard'),
    tseslint.configs.recommendedTypeChecked,
    prettierConfig,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            'import/no-absolute-path': 'off',
        },
    },
)
