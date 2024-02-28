module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        'fit': 'repeat(auto-fit, minmax(163px, 1fr))',
      },
      gridTemplateRows: {
        'fit': 'repeat(auto-fit, minmax(288px, 1fr))',
      },
    },
    fontFamily: {
      'satoshi': ['satoshi', 'sans-serif', 'system-ui'],
      'clash': ['clash-display', 'sans-serif', 'system-ui'],
    },
    fontSize: {
      sm: '0.9rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      'dark-primary': '#2A254B',
      'primary': '#4E4D93',
      'primary-light': '#726E8D',
      'light-gray': '#F9F9F9',
      'border-gray': '#EBE8F4',
      'border-dark': '#CAC6DA',
      'white': '#FFF',
      'black': '#000',
    },
    boxShadow: {
      'btn-dark-primary': 'inset 0 0 1.8em .5em #2A254B',
      'btn-primary': 'inset 0 0 1.8em .5em #4E4D93',
      'btn-b-gray': 'inset 0 0 1.8em .5em #EBE8F4',
      'btn-b-dark-gray': 'inset 0 0 1.8em .5em #CAC6DA',
      'btn-b-white': 'inset 0 0 1.8em .5em #FFF',
    }
  },
  variants: {},
  plugins: [],
};
