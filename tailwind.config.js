const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        black: "#1F2228",
        blue: "#1B3142",
        lightBlue: "#4594E4",
        gray: "#9E9E9E",
        darkGray: "#36393E",
        darkGray2: "#35383E",
        secondary: "#EC6F62",
      },
      fontSize: {
        8: "0.5rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        15: "0.9375rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        32: "2rem",
        34: "2.125rem",
        46: "2.875rem",
      },
      borderRadius: {
        4: "4px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        24: "24px",
        30: "30px",
        32: "32px",
        40: "40px",
        50: "50px",
      },
      borderWidth: {
        "1.5px": "1.5px",
        6: "6px",
      },
      opacity: {},
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        10.5: "2.625rem",
        11.5: "2.875rem",
        12: "3rem",
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        21: "5.25rem",
        22: "5.5rem",
        22.5: "5.625rem",
        23: "5.75rem",
        24: "6rem",
        25: "6.25rem",
        26: "6.5rem",
        30: "7.5rem",
        31: "7.75rem",
        34: "8.5rem",
        36: "9rem",
        39: "9.75rem",
        42: "10.5rem",
        44: "11rem",
        50: "12.5rem",
        65: "16.25rem",
        68: "17rem",
        84: "21rem",
        100: "25rem",
        108: "27rem",
        110: "27.5rem",
        120: "30rem",
        140: "35rem",
        160: "40rem",
        200: "50rem",
        "483px": "483px",
      },
      maxWidth: {
        284: "284px",
      },
      minWidth: {
        360: "360px",
        300: "300px",
        845: "845px",
      },
      maxHeight: { 55: "55px" },
      screens: {},
      lineHeight: {
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
      },
    },
    screens: {
      xxs: "375px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%", margin: "0 auto", padding: "0 24px" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};
