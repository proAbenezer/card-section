module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryRed: "hsl(0, 78%, 62%)",
        primaryCyan: "hsl(180, 62%, 55%)",
        primaryOrange: "hsl(34, 97%, 64%)",
        primaryBlue: "hsl(212, 86%, 64%)",
        neutralDarkBlue: "hsl(234, 12%, 34%)",
        neutralGrayishBlue: "hsl(229, 6%, 66%)",
        neutralLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
