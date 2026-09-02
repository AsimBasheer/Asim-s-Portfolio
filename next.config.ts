import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

// Only apply a basePath when explicitly building for GitHub Pages.
// Set GITHUB_PAGES=true only in that specific build/deploy script.
// Do NOT key this off NODE_ENV — `next build` always sets
// NODE_ENV=production, so that made this basePath apply to every
// production target (Vercel, Firebase, GitHub Pages alike), which is
// what broke asset loading on Firebase.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  basePath: isGithubPages ? "/Asim-s-Portfolio" : "",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "arfasoftech00",
  project: "javascript-nextjs",
});