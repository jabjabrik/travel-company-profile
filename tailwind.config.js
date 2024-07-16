/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './node_modules/flowbite/**/*.js',
        'index.html',
        'test.html',
    ],
    // content: ["*.html", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {}
    },
    plugins: [
        require('flowbite/plugin')
    ],
}