/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
      domains: ['tailwindui.com','images.unsplash.com',],
    },
    reactStrictMode: true,
    swcMinify: true,
    output:"standalone",
  };
  
  export default nextConfig;
  
