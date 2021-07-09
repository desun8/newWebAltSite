module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      wide: '0.015em'
    },

    extend: {
      colors: {
        'black': '#131313',
        'orange': '#ff5000'
      },
      gridTemplateColumns: {
        'subscribe': '260px auto',
        fillAuto: '1fr auto',
      },
      spacing: {
        19: '4.75rem',
        22: '5.5rem',
        '3/2': '150%',
        '5/4': '125%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
