/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: false,
});

export default withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true,
    devIndicators: {
        buildActivity: false,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
    },
});
