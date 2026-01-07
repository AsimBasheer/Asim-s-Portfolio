import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // instrumentationHook is now available by default, no need to configure it
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "arfasoftech00",
  project: "javascript-nextjs",
});
