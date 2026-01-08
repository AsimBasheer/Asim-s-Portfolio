// 100% SSR-safe cn function - ZERO dependencies on clsx or tailwind-merge
// This completely prevents "document is not defined" errors during SSR/prerendering
// No imports, no requires, no dynamic imports - pure JavaScript implementation

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

// Enhanced Tailwind conflict resolution
function resolveConflicts(classes: string[]): string[] {
  // Group classes by their base (e.g., 'p-4' and 'p-6' both have base 'p-')
  const conflictGroups: Record<string, string> = {};
  const standalone: string[] = [];
  
  // Common Tailwind prefixes that conflict
  const prefixes = [
    'p-', 'px-', 'py-', 'pt-', 'pb-', 'pl-', 'pr-',
    'm-', 'mx-', 'my-', 'mt-', 'mb-', 'ml-', 'mr-',
    'w-', 'h-', 'max-w-', 'min-w-', 'max-h-', 'min-h-',
    'text-', 'bg-', 'border-', 'rounded-',
    'flex', 'grid', 'block', 'inline', 'hidden', 'visible',
    'opacity-', 'z-', 'top-', 'bottom-', 'left-', 'right-',
  ];
  
  for (const cls of classes) {
    if (!cls || typeof cls !== 'string') continue;
    
    let matched = false;
    for (const prefix of prefixes) {
      if (cls.startsWith(prefix)) {
        // Keep the last occurrence (rightmost wins, like tailwind-merge)
        conflictGroups[prefix] = cls;
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      standalone.push(cls);
    }
  }
  
  // Combine standalone classes with resolved conflicts
  const result = [...standalone, ...Object.values(conflictGroups)];
  
  // Remove duplicates while preserving order
  return Array.from(new Set(result));
}

export function cn(...inputs: ClassValue[]): string {
  // Pure SSR-safe implementation - no external dependencies
  const classes = processClasses(inputs);
  const resolved = resolveConflicts(classes);
  
  return resolved
    .filter(Boolean)
    .join(" ")
    .trim();
}
