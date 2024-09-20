/**
 * Get Cookie
 * @param {string} cname - cookie name
 * @reference https://www.w3schools.com/js/js_cookies.asp
 * @returns string
 * */
declare const getCookie: (cname: string) => string | null | undefined;
/**
 * Set cookie on document
 *
 * @param {string} cname - cookie name
 * @param {string} cvalue - cookie value
 * @param {number} exdays - expiry days
 * @returns void
 */
declare const setCookie: (cname: string | undefined, cvalue: string, exdays?: number) => null | undefined;
/**
 * Delete cookie
 *
 * @param {string} cname - Cookie name to fetch
 * @returns void
 */
declare const deleteCookie: (cname: string) => null | undefined;
export { deleteCookie, getCookie, setCookie };
