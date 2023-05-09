module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
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
      'satoshi': ['satoshi', 'system-ui'],
      'clash': ['clash-display', 'system-ui', 'sans-serif'],
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
    },
  },
  variants: {},
  plugins: [],
};
