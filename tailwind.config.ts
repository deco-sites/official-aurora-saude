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
        orange2: "#FFDCD2",
        orange3: "#F99477",
        pink: "#ff50a4",
        "bg-gray": "#FAFAFA",
        gray2: "#767676",
        gray3: "#A8A8A8",
        gray4: "#F5F5F5",
        gray5: "#F2F2F2",
        aquagreen: "#72CCCC",
        yellow: "#FCFF73",
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
