const config = {
  plugins: {
    "@tailwindcss/postcss": {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        // Add any other paths to your Next.js components/pages
      ],
      theme: {
        extend: {
          screens: {
            xs: "480px", // New custom breakpoint for extra small screens
            "3xl": "1920px", // New custom breakpoint for extra extra large screens
          },
        },
      },
    },
  },
};

export default config;
