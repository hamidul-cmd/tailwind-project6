/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        1.5: '6px',
        2.5: '10px',
        3.5: '14px',

        4.5: '17px',
        10.5: '42px',
      },
      maxWidth: ({ theme, breakpoints }) => ({
        ...theme('spacing'),
        wrapper: '1320px',
        wrapper__2: '1438px',

        ...breakpoints(theme('screens')),
      }),
      fontFamily: {
        Public :'Public Sans',
      },
      colors: {
        gray__50: '#F2F4F5',
        gray__100: '#E4E7E9',
        gray__200: '#C9CFD2',
        gray__300: '#ADB7BC',
        gray__400: '#929FA5',
        gray__500: '#77878F',
        gray__600: '#5F6C72',
        gray__700: '#475156',
        gray__800: '#303639',



        primare__50: '#FFF3EB',
        primare__100: '#FFF3EB',
        primare__200: '#FFCEAD',
        primare__300: '#FFB685',
        primare__400: '#FF9D5C',
        primare__500: '#FA8232',
        primare__600: '#DE732D',
        primare__700: '#99501F',
        primare__800: '#663514',
        primare__900: '#331B0A',



        secondary__50: '#EAF6FE',
        secondary__100: '#D5EDFD',
        secondary__200: '#ABDBFA',
        secondary__300: '#81C9F8',
        secondary__400: '#57B7F5',
        secondary__500: '#2DA5F3',
        secondary__600: '#2484C2',
        secondary__700: '#1B6392',
        secondary__800: '#124261',
        secondary__900: '#092131',


        success__50: '#EAF7E9',
        success__100: '#D5F0D3',
        success__200: '#ABE0A7',
        success__300: '#81D17C',
        success__400: '#57C150',
        success__500: '#2DB224',
        success__600: '#248E1D',
        success__700: '#1B6B16',
        success__800: '#12470E',
        success__900: '#092407',


        warning__50: '#FDFAE7',
        warning__100: '#FBF4CE',
        warning__200: '#F7E99E',
        warning__300: '#F3DE6D',
        warning__400: '#EFD33D',
        warning__500: '#EBC80C',
        warning__600: '#BCA00A',
        warning__700: '#8D7807',
        warning__800: '#8D7807',
        warning__900: '#2F2802',


        danger__50: '#FDEEEE',
        danger__100: '#FCDEDE',
        danger__200: '#F8BCBC',
        danger__300: '#F59B9B',
        danger__400: '#F17979',
        danger__500: '#EE5858',
        danger__600: '#BE4646',
        danger__700: '#8F3535',
        danger__800: '#5F2323',
        danger__900: '#301212',

      },
      boxShadow: {
        ss__1: '0px 8px 24px #191c1f1f',
        ss__2: '0px 12px 24px #191c1f1f',
      },
    },
  },
  plugins: [],
}

