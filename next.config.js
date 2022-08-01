/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "node_modules/normalize-scss/sass")],
    },
    i18n: {
        locales: ["en", "ua"],
        defaultLocale: "en",
    }
};

module.exports = nextConfig;
