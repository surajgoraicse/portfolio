// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: '**'
//             }
//         ]
//     }
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    },

    // 🚫 Disable ETag generation
    generateEtags: false,

    // 🛑 Global no-cache headers
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-store, no-cache, must-revalidate, proxy-revalidate"
                    },
                    {
                        key: "Pragma",
                        value: "no-cache"
                    },
                    {
                        key: "Expires",
                        value: "0"
                    }
                ]
            }
        ];
    }
};

export default nextConfig;
