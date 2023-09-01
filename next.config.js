/** @type {import('next').NextConfig} */
const nextConfig = {
    content: [
      "./pages/**/*.{ts,tsx}",
      "./public/**/*.html",
      "./node_modules/flowbite-react/**/*.js",
    ],
    plugins: [
      require("flowbite/plugin")
    ],
    theme: {},
  };

module.exports = nextConfig
