/**
 * @deprecated This file is kept for backward compatibility with Sentry's webpack plugin.
 * The main client configuration is now in `instrumentation-client.ts`.
 * 
 * This file no longer initializes Sentry to avoid duplicate initialization.
 * All Sentry configuration is handled in `instrumentation-client.ts`.
 */

// Import the instrumentation-client to ensure it's loaded
// This file is kept for webpack plugin compatibility but doesn't initialize Sentry
import "./instrumentation-client";

