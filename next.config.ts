import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 enables Turbopack by default.
  // We force webpack in `package.json` via `next build --webpack` to avoid Turbopack build crashes on Vercel.
};

export default nextConfig;
