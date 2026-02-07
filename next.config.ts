import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/camp-stanley",
  images: { unoptimized: true },
};

export default nextConfig;
