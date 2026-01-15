import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export
  },
  // instrumentationHook is now available by default, no need to configure it
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "arfasoftech00",
  project: "javascript-nextjs",
});
