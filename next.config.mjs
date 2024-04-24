/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'server-for-products.vercel.app',
            }
        ]
    }
};

export default nextConfig;
