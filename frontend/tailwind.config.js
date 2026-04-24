module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f6f1",
          100: "#f0ece2",
          200: "#e0d8c5",
          300: "#d1c5a8",
          400: "#c1b18b",
          500: "#b29d6e",
          600: "#9d8c5f",
          700: "#7a6e4f",
          800: "#5a523a",
          900: "#3a3425",
        },
        accent: {
          50: "#fef8f3",
          100: "#fef0e7",
          200: "#fce1cf",
          300: "#f9d3b8",
          400: "#f7c4a0",
          500: "#f4b589",
          600: "#f0a671",
          700: "#d48c54",
          800: "#a86838",
          900: "#7c4c27",
        },
        dark: "#1a1a1a",
        light: "#f5f5f5",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
        slideDown: "slideDown 0.6s ease-out",
        slideLeft: "slideLeft 0.6s ease-out",
        slideRight: "slideRight 0.6s ease-out",
        scaleIn: "scaleIn 0.5s ease-out",
        bounce: "bounce 2s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, var(--tw-gradient-stops))",
        shimmer: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
      },
    },
  },
  plugins: [],
};
