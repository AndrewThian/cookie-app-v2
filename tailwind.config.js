module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      DEFAULT: '5px',
    },
    borderWidth: {
      DEFAULT: '1px'
    },
    fontWeight: {
      normal: 400,
      medium: 500
    },
    fontSize: {
      xs: '0.75rem',
      sm: ['0.875rem', '1.185'],
      base: ['1rem', '1.185'],
      lg: '1.5rem',
      xl: '2rem',
      xxl: '2.5rem',
    },
    extend: {
      width: {
        '40px': '40px',
      },
      colors: {
        blue: {
          400: '#2D3CFD',
          300: '#BDCDF6',
          200: '#F1F5FF'
        },
        green: {
          400: '#52C851',
          300: '#83E182',
          200: '#C2F5C1'
        },
        yellow: {
          400: '#FFD66B',
          300: '#FFE7A7',
          200: '#FFF2D0'
        },
        grey: {
          400: '#343A40',
          300: '#6E6E83',
          200: '#C3C3D4',
          100: '#EAEBF0'
        },
        pink: {
          400: '#FD2D78',
          300: '#FFC7DB',
          200: '#FFEDF3'
        }
      }
    },
  },
  corePlugins: {
   outline: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
