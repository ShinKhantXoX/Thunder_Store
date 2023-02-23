/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily:{
                "sora": 'Sora'
            },
            colors:{
                "white" : "#f8f5f2",
                "head" : "#232323",
                "para" : "#222525",
                "primary" : "#078080",
                "danger" : "#f45d48",
                "info" : "#2cb67d"
            }
        },
    },
    plugins: [],
}
