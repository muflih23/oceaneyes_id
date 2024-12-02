/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Work Sans'],
        'body': ['Work Sans'],
        'hero' : ['KarelleDEMO'],
      },
      backgroundImage: {
        'banner': `url(${process.env.REACT_APP_PUBLIC_URL}/banner.png)`,
      },
      colors: {
        'neutral' : '#272727',
        'purpleMuted' : '#E4D8E2',
        'purple' : '#BA92B3',
        'brownMuted' : '#EAE2DF',
        'brown' : '#A4715E',
        'greenMuted' : '#C8D0BF',
        'green' : '#5D7840',
        'surface' : '#F6F6F6',
      },
    },
  },
  plugins: [],
}

