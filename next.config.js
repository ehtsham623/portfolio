/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    dev: process.env.dev,
    prod: process.env.prod,
  },
};
