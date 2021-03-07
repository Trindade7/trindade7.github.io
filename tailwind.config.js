module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'bg-black': '#14213D'
    }),
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      // serif: ['Rokkitt', 'serif'],
      serif: ['Noto Serif', 'serif'],
      code: ['consolas', 'monospace','Courier New']
    },
    colors: {
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      orangeDark: {
        darkest: '#000000',
        dark: '#14213D',
        primary: '#FCA311',
        light: '#E5E5E5',
        lightest: '#ffffff',
      },
      coloredDark: {
        darkest: '#011627',
        dark: '#14213D',
        primary: '#2EC4B6',
        light: '#FF9F1C',
        lightest: '#FDFFFC',
      },
      corporateDarkDefault: {
        darkest: '#050401',
        dark: '#303036',
        primary: '#FC5130',
        accent: '#30BCED',
        light: '#FFFAFF',
        lightest: '#FFFFFF',
      },
      corporateDark: {
        darkest: '#040105',
        dark: '#2c2c40',
        primary: '#FC5130',
        accent: '#30BCED',
        light: '#FFFAFF',
        lightest: '#FFFFFF',
      },
      tools: {
        typescript: '#007ACC',
        javascript: '#F7DF1E',
        python: '#77add8',
        // angular: '#c40030',
        angular: '#fa0146',
        svelte: '#FF3E00',
        nodejs: '#6cbd4a',
        sapper: '#159497',
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.corporateDark.dark"),
            a: {
              color: theme("colors.corporateDark.dark"),
              "&:hover": {
                color: theme("colors.corporateDark.primary")
              },
            },
            h1: {
              fontFamily: theme('text.serif'),
              color: theme("colors.corporateDark.darkest")
            },
            h2: {
              fontFamily: theme('text.serif'),
              color: theme("colors.corporateDark.darkest")
            },
            h3: {
              fontFamily: theme('text.serif'),
              color: theme("colors.corporateDark.darkest")
            },
            h4: {
              fontFamily: theme('text.serif'),
              color: theme("colors.corporateDark.darkest")
            },

            p: {
              lineHeight: '1.8rem',
              letterSpacing: '0.02rem'
            }
          },
        },

        dark: {
          css: {
            color: theme("colors.corporateDark.light"),
            a: {
              color: theme("colors.corporateDark.light"),
              "&:hover": {
                color: theme("colors.corporateDark.primary")
              },
            },
            h1: {
              color: theme("colors.corporateDark.lightest")
            },
            h2: {
              color: theme("colors.corporateDark.lightest")
            },
            h3: {
              color: theme("colors.corporateDark.lightest")
            },
            h4: {
              color: theme("colors.corporateDark.lightest")
            },
            strong: {
              color: theme("colors.corporateDark.lightest")
            },
            code: {
              color: "#d3d5da"
            },
          },
        },
      })
    }

  },
  variants: {
    typography: ["dark"],
    extend: {
      padding: ['hover', 'focus'],
      gap: ['hover', 'focus']
    }
  },
  plugins: [
    require('@tailwindcss/typography'), // TODO: CDN?
    require('@tailwindcss/line-clamp')

  ],
};
