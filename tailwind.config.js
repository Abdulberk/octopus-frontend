/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounceBackOn: 'bounceBackOn 0.3s ease-in-out',
        bounceBackOff: 'bounceBackOff 0.3s ease-in-out',
      },  
      keyframes: {
        
         bounceBackOn: {
              '0%': { left: '0' },
              '70%': {  left: '21px' },
              '100%': { left: '18px' },
          },
          bounceBackOff: {
            '0%': { left: '18px' },
            '70%': {  left: '-2px' },
            '100%': { left: '0' },

        }
      },
      boxShadow : {
        'activeListItem' : '0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)',
        'authNavbar' : '0px 7px 23px 0px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'waves': "url('/src/assets/waves.png')", 
        'waves2': "url('/src/assets/waves2.png')",
        'brooke' : "url('/src/assets/brooke.png')",
        'loginCover' : "url('/src/assets/login-cover.png')",
        'registerCover' : "url('/src/assets/register-cover.png')",
      },
     
      gridTemplateColumns: {
        'dashboardCols': 'repeat (4, auto)',
    },
    gridTemplateRows: {

      'dashboardRows': 'repeat (4, auto)',
    },
    
    colors: {
      sidebar : '#F8F9FA',
      sidebarListItemPassiveText : '#A0AEC0',
      sidebarListItemActiveText : '#2D3748',
      sidebarListItemActiveBg : '#FFFFFF',
      sidebarListItemActiveIconBg : '#4FD1C5',
      sidebarListItemPassiveIconBg : '#FFFFFF',
      activeUsers : 'linear-gradient(82deg, #313860 2.25%, #151928 79.87%)',
      


  },
  fontFamily: {
    'sans': ['Helvetica', 'Arial', 'sans-serif'],

  },
  fontSize: {
    'xs': '.75rem',
    'sm': '.875rem',
    'tiny': '.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
  },
  
  },
  plugins: [],
}

}