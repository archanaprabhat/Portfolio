   // tailwind.config.mjs
   const config = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          lightHover: "#fcf4ff",
          darkHover: "#2a004a",
          darkTheme: "#11001f",
        },
        fontFamily: {
          outfit: ["Outfit", "sans-serif"],
          ovo: ["Ovo", "serif"],
        },
        screens: {
          xs: "480px",
        }
      },
    },
    plugins: [],
  }

  export default config