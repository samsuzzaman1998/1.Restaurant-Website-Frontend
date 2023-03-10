/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            xs: "350px",
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        colors: {
            green: {
                100: "#00B769",
                200: "#009349",
                300: "#00702A",
                400: "#00702A",
                500: "#003000",
            },
            white: "#ffffff",
            black: "#000000",
            gray: "#D3D3D3",
            red: "#FF0000",
        },
        extend: {},
    },

    plugins: [require("daisyui")],
};
