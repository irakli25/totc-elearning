type ClassValue = string | false | null | undefined;

/** Joins conditional class names. Deliberately tiny — the project never needs
 *  Tailwind conflict resolution because variants own their own class sets. */
export function cn(...parts: ClassValue[]): string {
  return parts.filter(Boolean).join(" ");
}
