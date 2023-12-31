/** @type {import('tailwindcss').Config} */
module.exports = {
  
 purge: {
  content: [
    './src/**/*.js', './public/index.html'
  ],
 },
  theme: {
    extend: {
      colors: {
        blue: {
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
        
        }
        
    },
     fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
     screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    borderRadius: {
      '4xl': '50px'
    }
  },
    },
    variant: {},
  plugins: [
    
  ],
}

