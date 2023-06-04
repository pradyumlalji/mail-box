/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            mob: { max: "600px" },
        },
        extend: {
            colors: {
                granite: "#696969",
                litegranite: "#9e9e9e",
                primary: "#C4DFDF",
                charcoal: "#484848",
                nobel: "#a0a0a0",
                carbon: "#212121",
                jaguar: "#27272A",
                zircon: "#E9EAEA",
                nero: "#222222",
                whisper: "#e7e7e7",
                error: "#FF0000",
                secondary: "#27374D",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
