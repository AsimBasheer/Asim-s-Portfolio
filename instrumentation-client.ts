import * as Sentry from "@sentry/nextjs";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (!dsn) {
  console.error("❌ Sentry DSN not found. Errors will not be reported to Sentry.");
  console.error("Please add NEXT_PUBLIC_SENTRY_DSN to your .env.local file");
} else {
  console.log("🔵 Initializing Sentry with DSN:", dsn.substring(0, 30) + "...");
  
  Sentry.init({
    dsn,
    environment: process.env.NODE_ENV || "development",
    tracesSampleRate: 1.0,
    debug: true, // Always enable debug to see what's happening
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    integrations: [
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
      Sentry.feedbackIntegration({
        colorScheme: 'dark',
      }),
    ],
    // Log to console for debugging
    beforeSend(event, hint) {
      console.log("🔵 Sentry Client Event being sent:", {
        event_id: event.event_id,
        message: event.message,
        exception: event.exception,
        level: event.level,
      });
      console.log("🔵 Sentry Client Hint:", hint);
      // Always return event to ensure it's sent
      return event;
    },
    // Verify Sentry is working
    beforeBreadcrumb(breadcrumb, hint) {
      console.log("🍞 Sentry Breadcrumb:", breadcrumb);
      return breadcrumb;
    },
  });
  
  // Add global error handler for transport errors
  if (typeof window !== "undefined") {
    window.addEventListener("unhandledrejection", (event) => {
      if (event.reason?.message?.includes("403") || event.reason?.status === 403) {
        console.error("❌ Sentry 403 Error detected!");
        console.error("This usually means:");
        console.error("1. DSN key is invalid or expired");
        console.error("2. Project ID doesn't match");
        console.error("3. DSN doesn't have proper permissions");
        console.error("Get a fresh DSN from: https://sentry.io/settings/arfasoftech00/projects/javascript-nextjs/keys/");
      }
    });
  }
  
  console.log("✅ Sentry client initialized successfully");
}

// Export router transition hook for navigation instrumentation
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

