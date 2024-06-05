import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        orange: "#ff8461",
        pink: "#ff50a4",
        "bg-gray": "#fafafa",
      },
      height: {
        "banner-height": "calc(100vh - 250px)",
      },
      fontFamily: {
        getho: ["getho", "sans-serif"],
      },
      boxShadow: {
        "outline-orange": "0 0 0 2px rgba(255, 165, 0, 1)", // Ajuste a cor e o tamanho conforme necessário
      },
    },
  },
};
