/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {

    fontFamily: {
      'sans': ["Segoe UI", "Roboto", "Oxygen - Sans", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", " Helvetica", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
