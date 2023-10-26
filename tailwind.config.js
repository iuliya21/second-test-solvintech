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
        colorWhite: "#FFF"
      },
      backgroundImage: {
        "svg-background": "url('@images/sum.svg')",
        "svg-background-small": "url('@images/sum-small.svg')",
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
        "background-message-sm": "url('@images/message-sm.svg')",
        "background-message-left": "url('@images/message-left.svg')",
        "background-programm": "url('@images/frame-programm.svg')",
        "background-programm-cool": "url('@images/frame-programm-cool.svg')",
        "background-programm-super": "url('@images/frame-programm-super.svg')",
        "background-count-small": "url('@images/frame-count-small.svg')",
        "background-count-middle": "url('@images/frame-count-middle.svg')",
        "background-frame-date-sm": "url('@images/frame-date-sm.svg')",
        "background-frame-date-sm-left": "url('@images/frame-date-sm-left.svg')",
        "background-frame-birthday": "url('@images/frame-birthday.svg')",
        "background-frame-birthday-small": "url('@images/frame-birthday-small.svg')",
        
      },
      boxShadow: {
        custom: '0px 7px 30px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
