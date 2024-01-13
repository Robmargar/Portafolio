/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cafe: "#482c21",
        naranja: "#ff5900",
        amarillo: "#fa9205",
        beige: "#e9deb0",
        azul: "#001119",
      },
    },
  },
  plugins: [],
};
