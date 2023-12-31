/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Inter Variable', 'sans-serif'],
      body: ['Roboto Mono Variable', 'sans-serif'],
    },
    extend: {
      colors: {
        light: {
          DEFAULT: '#EFEFEF',
          primary: '#267B0C',
          text: '#2D2D2D',
          interactive: { primary: '#267B0C' },
          icon: '#555555',
          surface: {
            DEFAULT: '#FDFDFD',
            hovered: '#F0F0F0',
            pressed: '#E3E3E3',
            'neutral-subdued': '#F4F4F4',
            'selection-primary': {
              DEFAULT: '#E9F1E7',
              hovered: '#E3EDE0',
            },
          },
          brand: {
            'green-100': '#3CBE14',
            'dark-gray': '#2D2D2D',
          },
        },
        dark: {
          DEFAULT: '#2D2D2D',
          primary: '#3CBE14',
          text: '#EFEFEF',
          interactive: { primary: '#3CBE14' },
          icon: '#CACACA',
          surface: {
            DEFAULT: '#4A4A4A',
            hovered: '#3B3B3B',
            pressed: '#353535',
            'neutral-subdued': '#313131',
            'selection-primary': {
              DEFAULT: '#343E32',
              hovered: '#313A2F',
            },
          },
          brand: {
            'green-100': '#3CBE14',
            'dark-gray': '#FFFFFF',
          },
        },
      },
      screens: {
        sm: '560px',
      },
      boxShadow: {
        'sidebar-item-light-focussed':
          '0px 0px 0px 6px rgba(38, 123, 12, 0.50), 0px 0px 0px 4px #267B0C, 0px 0px 0px 2px #F7F7F7',
        'sidebar-item-dark-focussed':
          '0px 0px 0px 4px #3CBE14, 0px 0px 0px 6px rgba(60, 190, 20, 0.50), 0px 0px 0px 2px #4A4A4A',
      },
    },
  },
  plugins: [],
};
