/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
