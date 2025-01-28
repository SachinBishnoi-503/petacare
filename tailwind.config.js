/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": "Montserrat,sans-serif",
      },
      backgroundImage: {
        'dogimg':"../assets/images/webp/dog-banner.png"
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
          'xxl': "1440px",
        }
      },

      fontSize: {
        'custom-sm': "28px",
        'custom-lg': "30px",
        'custom-xl': "32px",
        'custom-2xl': "50px",
      },
      colors: {
        'gold': "#FEAE11",
        'stone-gray': "#707070",
        'very-light': "#F8F8F8",
        'stay-grey': "#707070",
        'blue':"#0056CD",
      },
      // backgroundImage: {
      //   'gradinent-main-text': ' gradient(90.79deg, #994FFF 0.27 %, #4AB6FE 98.57 %)',
      //   'gradient-button': 'gradient(104.91deg, #2ABAE9 0 %, #1B77CC 100 %)',
      //   'gradient-border': 'linear- gradient(90.79deg, #994FFF 0.27 %, #4AB6FE 98.57 %)',
      // },
      boxShadow: {
        'custom-light': '30px 33px 4px 0px rgba(255, 255, 255, 0.5)',
      },
      lineHeight: {
        'custom-sm': "40px",
        'custom-lg': "45px",
        'custom-xl': "52px",
        'custom-2xl': "60px",
        'custom-3xl': "120px",
      },
    },
  },
  plugins: [],
}