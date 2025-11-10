/**
 * Join multiple class names into a single string, filtering out falsy values
 * @param classes - Class names (strings, undefined, null, false, etc.)
 * @returns Joined class string with falsy values removed
 * @example
 * joinClasses('bg-red', undefined, 'text-white', null) // 'bg-red text-white'
 */
export function joinClasses(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

