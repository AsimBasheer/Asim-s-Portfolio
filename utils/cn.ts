// SSR-safe cn function - avoids importing clsx/tailwind-merge at module level
// which prevents "document is not defined" errors during SSR

type ClassValue = string | number | boolean | undefined | null | ClassValue[] | Record<string, boolean>;

function processClasses(input: ClassValue): string[] {
  if (!input) return [];
  if (typeof input === "string" || typeof input === "number") return [String(input)];
  if (Array.isArray(input)) {
    return input.flatMap(processClasses);
  }
  if (typeof input === "object") {
    return Object.entries(input)
      .filter(([_, value]) => Boolean(value))
      .map(([key]) => key);
  }
  return [];
}

// Cache for client-side libraries
let clsxCache: any = null;
let twMergeCache: any = null;

function getClientLibraries() {
  if (typeof window === "undefined") return null;
  
  if (!clsxCache || !twMergeCache) {
    try {
      // Use dynamic import only on client side
      clsxCache = require("clsx");
      twMergeCache = require("tailwind-merge");
    } catch {
      return null;
    }
  }
  
  return { clsx: clsxCache, twMerge: twMergeCache };
}

export function cn(...inputs: ClassValue[]): string {
  const classes = processClasses(inputs);
  const classString = classes.join(" ");
  
  // On client side, use tailwind-merge for proper conflict resolution
  if (typeof window !== "undefined") {
    const libs = getClientLibraries();
    if (libs?.clsx && libs?.twMerge) {
      try {
        return libs.twMerge(libs.clsx(inputs));
      } catch {
        // Fallback to simple merge if libraries fail
      }
    }
  }
  
  // SSR fallback: simple deduplication
  return classString
    .split(" ")
    .filter((cls, index, arr) => arr.indexOf(cls) === index)
    .filter(Boolean)
    .join(" ");
}
