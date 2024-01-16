/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cafe: "#9b6955",
        naranja: "#ff5900",
        amarillo: "#fa9205",
        beige: "#fcfcfc",
        azul: "#001119",
      },
    },
  },
  plugins: [],
};
