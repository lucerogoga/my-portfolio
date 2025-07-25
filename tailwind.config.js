/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
      },
      colors: {
        transparent: "transparent",
        black: "#0a0809",
        white: "#f6eee3",
        gray: "#454545",
        blue: "#fd629c",
        "ligth-blue": "#B4C8F3",
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
