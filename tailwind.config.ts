import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        orange1: "#FF8461",
        orange2: "#FFDCD2",
        orange3: "#F99477",
        pink1: "#FF50A4",
        gray1: "#FAFAFA",
        gray2: "#767676",
        gray3: "#A8A8A8",
        gray4: "#F5F5F5",
        gray5: "#F2F2F2",
        gray6: "#DCDCDC",
        gray7: "#727272",
        aquagreen: "#72CCCC",
        yellow: "#FCFF73",
      },
      height: {
        "banner-height": "calc(100vh - 250px)",
      },

      boxShadow: {
        "outline-orange1": "0 0 0 2px rgba(255, 165, 0, 1)", // Ajuste a cor e o tamanho conforme necessário
      },
    },
    fontFamily: {
      sora: ["Sora", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
};
