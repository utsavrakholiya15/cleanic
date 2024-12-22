/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "pc":{"max":"1150px"},
        "lt":{"max":"1024px"},
        "lt-mini":{"max":"900px"},
        "tab":{"max":"768px"},
        "mob":{"max":"576px"},
        "mob-mini":{"max":"430px"},
      },
      colors:{
        primary:"#fffdf2",
        customYellow:"#fff9af",
        customGray:"#4c5b5c",
        customGreen:"#0a2323",
      },
      backgroundImage:{
        "whyBg":"url('./assets/IMAGEs/whyImage.jpg')",
      },
      fontFamily:{
        primary:"Questrial",
      },
      container:{
        maxWidth:"1280px",
        center:true,
      },
    },
  },
  plugins: [],
}