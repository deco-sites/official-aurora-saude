import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      keyframes: {
        spriteAnimation: {
          "0%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite1.png")',
          },
          "5%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite2.png")',
          },
          "10%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite3.png")',
          },
          "20%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite4.png")',
          },
          "30%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite5.png")',
          },
          "45%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite6.png")',
          },
          "50%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite7.png")',
          },
          "60%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite8.png")',
          },
          "70%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite9.png")',
          },
          "85%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite10.png")',
          },
          "90%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite11.png")',
          }, // Mantém a última imagem
          "100%": {
            backgroundImage:
              'url("/ReceiveContactBtnSprites/receive-contact-btn-sprite12.png")',
          },
        },
      },
      animation: {
        sprite: "spriteAnimation 1s steps(12, end) infinite",
      },
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
        gray8: "#B8B8B8",
        aquagreen: "#72CCCC",
        green: "#70FF00",
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
