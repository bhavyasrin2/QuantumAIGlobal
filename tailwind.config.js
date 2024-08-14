/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  boxShadow: {
    'dropdownshadow': '0px 0px 10px rgba(27, 153, 212, 1)',
    // You can add more custom shadows here
  },
  extend: {
    backgroundImage: {
      'grid-large': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"><path d=\"M0 .5H31.5V32\"/></svg>')",
      'grid-small': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 8 8\" width=\"8\" height=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"><path d=\"M0 .5H7.5V8\"/></svg>')",
    },
    fontFamily: {
      RobotoRegular: "Roboto-Regular",
      RobotoMedium: "Roboto-Medium",
      RobotoBold:"Roboto-Bold",
      Quantify:"Quantify",
      
    },
  },
};
export const plugins = [require("tailwind-scrollbar-hide")];