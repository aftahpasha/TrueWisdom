/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": ['"IBM Plex Sans"', "sans-serif"],
        "ibm-plex-serif": ['"IBM Plex Serif"', "serif"],
        "kaisei-decol": ['"Kaisei Decol"', "serif"],
      },
      colors: {
        "brand-purple": {
          light: "#E5D3FD", // Adjusted, original was a gradient
          DEFAULT: "#653894", // Main purple for buttons, accents
          dark: "#321C4A", // Darker purple for text, backgrounds
        },
        "brand-orange": {
          light: "#FEF4E7",
          DEFAULT: "#F8B35B",
          dark: "#935506",
        },
        "brand-gray": {
          light: "#F0F2F5", // for backgrounds like input fields
          DEFAULT: "#71717B", // for text
          dark: "#535861",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in-left": {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-left": {
          from: { transform: "translateX(0)", opacity: "1" },
          to: { transform: "translateX(-100%)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-out forwards",
        "slide-out-left": "slide-out-left 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
