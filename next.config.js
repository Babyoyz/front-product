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
    images: {
      domains: ['images.unsplash.com','img.freepik.com'],
  },
  };

module.exports = nextConfig
