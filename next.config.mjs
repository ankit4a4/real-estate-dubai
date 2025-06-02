/  @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com', 'res.cloudinary.com'], 
  },
  env: {
    PIXABAY_API_KEY: process.env.PIXABAY_API_KEY, // Store your Pixabay API key in .env.local
  },
};

export default nextConfig;
