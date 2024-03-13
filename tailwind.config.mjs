/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'kanit': ['kanit', 'sans-serif']
		}
	},
	plugins: [addDynamicIconSelectors()],
}
