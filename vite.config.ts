import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import Unimport from 'unimport/unplugin';
import Components from 'unplugin-vue-components/vite';

/**
 * Current working directory, always relative to where the script is run.
 */
const WORKING_DIR = process.cwd();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		Unimport.vite({
			presets: ['vue', 'pinia'],
			dirs: [
				'./src/composables/*',
				'./src/components/*',
				'./src/core/*',
				'./src/store/*',
				'./src/utils/*',
			],
			addons: {
				vueTemplate: true,
			},
			dts: resolve(WORKING_DIR, 'src', 'imports.d.ts'),
		}),
		Components({
			dts: resolve(WORKING_DIR, 'src', 'components.d.ts'),
			dirs: ['./src/components'],
			deep: true,
			directoryAsNamespace: true,
		}),
		vue(),
	],
	resolve: {
		alias: {
			'@': resolve(WORKING_DIR, 'src'),
		},
	},
})