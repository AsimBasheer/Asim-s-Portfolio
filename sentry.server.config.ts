import * as Sentry from "@sentry/nextjs";

const dsn = process.env.SENTRY_DSN;

if (!dsn) {
  console.warn("Sentry DSN not found. Server errors will not be reported to Sentry.");
}

Sentry.init({
  dsn,
  tracesSampleRate: 1.0,
  debug: process.env.NODE_ENV === "development", // Enable debug in development
  beforeSend(event, hint) {
    if (process.env.NODE_ENV === "development") {
      console.log("🟢 Sentry Server Event:", event);
      console.log("🟢 Sentry Server Hint:", hint);
    }
    return event;
  },
});

// Verify initialization
if (dsn && process.env.NODE_ENV === "development") {
  console.log("✅ Sentry server initialized successfully");
  console.log("DSN:", dsn.substring(0, 30) + "...");
}

