/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        backgroundColorModal: "#FFC907",
        colorBlue: "#00B4D2",
        colorGreen: "#39B54A",
        colorGrey: "#949494",
        colorRed: "#F45741",
      },
      backgroundImage: {
        "svg-background": "url('@images/sum.svg')",
        "close-button": "url('@images/close-button.svg')",
        "background-countguest": "url('@images/countguest.svg')",
        "background-btn-continue": "url('@images/button-continue.svg')",
        "background-btn-left": "url('@images/button-left.svg')",
        "background-btn-prev": "url('@images/prev.svg')",
        "background-btn-decr": "url('@images/decrement.svg')",
        "background-btn-inc": "url('@images/increment.svg')",
        "background-calendar": "url('@images/frame14-16.svg')",
        "background-calendar-harder": "url('@images/frame16-18.svg')",
        "background-message": "url('@images/message.svg')",
        "background-message-left": "url('@images/message-left.svg')",
      },
    },
  },
  plugins: [],
};
