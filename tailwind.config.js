/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jua: "jua",
        poppins: "poppins",
      },
      colors: {
        transparent: "transparent",
        black: "#313131",
        white: "#FAF9F6",
        gray: "#454545",
        blue: "#5889D8",
        "bg-color-main": "#313131",
      },
      borderWidth: {
        6: "6px",
      },
      animation: {
        "shadow-pop": "pop 0.3s ease-in-out both",
      },
      keyframes: {
        pop: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(6px) translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
