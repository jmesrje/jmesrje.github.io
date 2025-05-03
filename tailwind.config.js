/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#070707",
        "default-color": "#ffffff",
        "divider-color": "#232323",
        "link-color": "#93ceff",
        "subtext-color": "#494949",
      },
      fontSize: {
        "title-size": "42px",
        "heading-size": "32px",
        "default-size": "16px",
        "subtext-size": "12px",
      },
    },
    fontFamily: {
      regular: "Inter, sans-serif",
      monospace: "JetBrains Mono, monospace",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
