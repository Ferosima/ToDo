/**
 * A "modern" sleep statement.
 *
 * @param {number} ms The number of milliseconds to wait.
 */
export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
