module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'bg-black': '#14213D'
    }),
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Rokkitt', 'serif'],
    },
    colors:{
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      orangeDark:{
        darkest: '#000000',
        dark: '#14213D',
        primary: '#FCA311',
        light: '#E5E5E5',
        lightest: '#ffffff',
      },
      coloredDark:{
        darkest: '#011627',
        dark: '#14213D',
        primary: '#2EC4B6',
        light: '#FF9F1C',
        lightest: '#FDFFFC',
      },
      corporateDark:{
        darkest: '#050401',
        dark: '#303036',
        primary: '#FC5130',
        accent: '#30BCED',
        light: '#FFFAFF',
        lightest: '#FFFFFF',
      },
    }
  },
  plugins: [],
};
