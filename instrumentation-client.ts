// Client-side only Sentry initialization to prevent SSR errors
// This file is only executed on the client side

function initializeSentry() {
  if (typeof window === "undefined") return;
  
  // Dynamic import to prevent SSR execution
  import("@sentry/nextjs").then((Sentry) => {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

    if (!dsn) {
      console.error("❌ Sentry DSN not found. Errors will not be reported to Sentry.");
      return;
    }
    
    console.log("🔵 Initializing Sentry with DSN:", dsn.substring(0, 30) + "...");
    
    Sentry.init({
      dsn,
      environment: process.env.NODE_ENV || "development",
      tracesSampleRate: 1.0,
      debug: true,
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
      beforeSend(event, hint) {
        console.log("🔵 Sentry Client Event being sent:", {
          event_id: event.event_id,
          message: event.message,
          exception: event.exception,
          level: event.level,
        });
        return event;
      },
      beforeBreadcrumb(breadcrumb) {
        return breadcrumb;
      },
    });
    
    window.addEventListener("unhandledrejection", (event) => {
      if (event.reason?.message?.includes("403") || event.reason?.status === 403) {
        console.error("❌ Sentry 403 Error detected!");
      }
    });
    
    console.log("✅ Sentry client initialized successfully");
  }).catch(() => {
    // Silently fail if Sentry can't be loaded
  });
}

// Only initialize on client side
if (typeof window !== "undefined") {
  initializeSentry();
}

// Export router transition hook - safe for SSR
export const onRouterTransitionStart = () => {};

