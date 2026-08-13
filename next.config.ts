import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // figlet loads its font files from the filesystem at runtime; keep it out of
  // the server bundle so the .flf fonts resolve correctly.
  serverExternalPackages: ["figlet"],
};

export default nextConfig;
