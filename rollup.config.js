import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup';
import marked from 'marked';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && warning.message.includes('/@sapper/')) || onwarn(warning);
const markdown = () => ({
	transform (md, id) {
		if (!/\.md$/.test(id)) return null;
		const data = marked(md);
		return {
			code: `export default ${JSON.stringify(data.toString())};`
		};
	}
});

export default {
	preserveEntrySignatures: 'strict',
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				preventAssignment: true,
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				emitCss: true,
				compilerOptions: {
					generate: 'ssr',
					hydratable: true,
					customElement: false
				}
			}),
			resolve(),
			commonjs(),
			babel({
				babelHelpers: 'runtime',
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),
			!dev && terser({
				module: true
			})
		],
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				compilerOptions: {
					generate: 'ssr'
				}
			}),
			resolve({ browser: true }),
			commonjs(),
			markdown()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],

		onwarn,
	}
};
