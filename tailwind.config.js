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
          500: "#8A57C0",
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
        "brand-honey-yellow": {
          light: "#FCDDB6",
          DEFAULT: "#F8B35B",
          dark: "#623904",
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
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
