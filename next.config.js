/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'connorfroese.ca',
                port: '',
                pathname: '/portfolio-src/wp-content/uploads/**',
            }
        ]
    }
}

module.exports = nextConfig
