/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', 'lh3.googleusercontent.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
