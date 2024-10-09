/**
 * Cleans a Set by filtering out values that do not start with the given
 * string, and returns a string of the remaining values joined by '-'.
 *
 * @param {Set} set - The Set to clean
 * @param {string} startString - The string to filter values by
 * @return {string} A string of the remaining values joined by '-'
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
