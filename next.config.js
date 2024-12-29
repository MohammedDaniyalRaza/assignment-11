/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export as it's not needed for Vercel
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  }
};

module.exports = nextConfig;