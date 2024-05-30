/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Quicksand Variable", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        size: "height, width",
      },
    },
  },
  plugins: [],
};
