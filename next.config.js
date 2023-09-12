/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		domains: ["naszsklep-api.vercel.app"],
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);