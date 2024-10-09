/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Queries the API with the given endpoint and keeps track of the number
 * of times the endpoint has been called.
 *
 * @param {string} endpoint - The endpoint to query
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
