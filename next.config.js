/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "node_modules/normalize-scss/sass")],
    },
    // images: {
    //     loader: "custom",
    //     path: "https://image.tmdb.org/t/p/w500",
    // }
};

module.exports = nextConfig;
