/** @type {import('next').NextConfig} */
const withPWAInit = require("@imbios/next-pwa");
const isDev = process.env.NODE_ENV !== "production";

const withPWA = withPWAInit({
  // your other config
  exclude: [
    // add buildExcludes here
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/,
        )
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    },
  ],
});

const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "cdn.auth0.com",
      "img.freepik.com",
      "i.ibb.co",
      "45.76.149.220",
    ],
  },

  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify: true,
  // output: "standalone",
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverActions: true,
  },
  // webpack: (config) => {
  //   config.externals.push({
  //     sharp: "commonjs sharp",
  //     canvas: "commonjs canvas",
  //   });
  //   return config;
  // },
  //   typescript: {
  // //     // !! WARN !!
  // //     // Dangerously allow production builds to successfully complete even if
  // //     // your project has type errors.
  // //     // !! WARN !!
  // //     ignoreBuildErrors: true,
  // //   },
};

module.exports = withPWA(nextConfig);
