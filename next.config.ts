import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  adapterPath: require.resolve("@vercel/next/dist/adapter"),
};

export default nextConfig;
