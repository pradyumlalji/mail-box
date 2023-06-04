/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            mob: { max: "600px" },
        },
        extend: {
            colors: {
                primary: "#C4DFDF",
                nobel: "#a0a0a0",
                zircon: "#E9EAEA",
                whisper: "#e7e7e7",
                secondary: "#27374D",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
