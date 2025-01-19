import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: '/my-api/products', //custom made costume
				destination: 'https://dummyjson.com/products/1',
			},
		];
	},
};

export default nextConfig;
