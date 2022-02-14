module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#5983e8',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'primary': '#8492a6',
        'primary-dark': '#3b4151',
        'gray-dark': '#3b4151',
        'gray': '#8492a6',
        'gray-light': '#e9e9e7',
        'white': '#FFF',
        'black': '#000',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    }
}