/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily:{
        'afarsek':'AfarsekFont',
        'chasamba':'ChasambaFont'
      }, colors:{
      'my_color':'#fff0e1'
    }
     
    },
   
  },
  plugins: [],
}

