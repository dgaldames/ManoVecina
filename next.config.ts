import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ynhbwjmlrbicqklevxrn.supabase.co',
        port: '',
      }
    ]
  }
};

/* module.exports = {
  images: {
      domains: ['ynhbwjmlrbicqklevxrn.supabase.co'],
  },
  // ...otros ajustes...
}; */



export default nextConfig;
