import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

// prettier-ignore
export default [
    {
		ignores: ["dist/"]
    },
	{ files: ["src/**/*.{js,ts,jsx,tsx}", "tests/**/*.{js,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.node } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	eslintPluginPrettier,
];
