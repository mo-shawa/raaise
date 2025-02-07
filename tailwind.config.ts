import { b } from 'motion/react-client'
import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			brand: {
				primary: '#B0D612',
				light: '#ECFCCB',
			},
			black: '#000104',
			white: '#ffffff',
			lightGray: '#b2b2b2',
			darkGray: '#7f7f7f',
		},
		extend: {
			fontFamily: {
				sans: 'var(--font-geist-sans)',
				mono: 'var(--font-geist-mono)',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			backgroundImage: {
				'hero-gradient': "url('/hero-bg.svg')",
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
export default config
