import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: ['@emotion/babel-plugin'],
			},
		}),
	],
	resolve: {
		alias: [
			{ find: '#features', replacement: fileURLToPath(new URL('./src/features', import.meta.url)) },
			{ find: '#shared', replacement: fileURLToPath(new URL('./src/shared', import.meta.url)) },
		],
	},
});
