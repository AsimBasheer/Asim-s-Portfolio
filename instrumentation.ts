import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export async function onRequestError(
  err: Error,
  request: {
    path: string;
    headers: Record<string, string | string[] | undefined>;
    method?: string;
  },
  context: {
    routerKind?: string;
    routePath?: string;
  }
) {
  Sentry.withScope((scope) => {
    scope.setContext("request", {
      url: request.path,
      headers: request.headers,
      method: request.method,
    });
    scope.setContext("nextjs", {
      routerKind: context.routerKind,
      routePath: context.routePath,
    });
    Sentry.captureException(err);
  });
}

