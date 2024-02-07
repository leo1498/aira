/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
    theme: {
      extend: {
        colors: {
          primary: "#000",
        },
      },
    },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'],
  variants: {
    extend: {},
  },
  darkmode: false,
}
