module.exports = {
  mode: "jit",
  purge: ['./src/pages/**/*.{html,js}',
  './src/components/**/*.{html,js}',
  './src/layouts/**/*.{html,js}',
  './index.html',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited"],
    },
  },
  plugins: [],
};
