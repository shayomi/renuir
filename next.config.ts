import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 enables Turbopack by default.
  // We force webpack in `package.json` via `next build --webpack` to avoid Turbopack build crashes on Vercel.
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/.well-known/assetlinks.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
