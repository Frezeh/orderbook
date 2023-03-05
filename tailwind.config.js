/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-fast": "spin 0.5s linear infinite",
      },
      height: {
        page: "calc(100vh - 64px)",
      },
      minHeight: {
        page: "calc(100vh - 64px)",
      },
      width: {
        mobile: "480px",
      },
      screens: {
        smDesktop: { max: "1024px" }, // small desktop
        tablet: { max: "768px" },
        mobile: { max: "480px" },
        smMobile: { max: "320px" },
      },
    },
  },
  plugins: [],
};
