/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			height: {
				screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
			},
		},
	},
	plugins: [],
}
