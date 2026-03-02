const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
  extend: {
    animation: {
      scroll: 'scroll 30s linear infinite',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
}
};

export default config;
