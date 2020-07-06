https://github.com/alex996/presentations
http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/
https://www.youtube.com/watch?v=67mezK3NzpU
https://www.rdegges.com/2018/please-stop-using-local-storage/
/**
 *  Authentication: verify identity (401 Authorized);
 *  Authorization:  verifying permissions (403 Forbidden)
 *
 *  username / password schema
 *
 *  statefull: using session or cookies
 *  stateless: using token (JWT/OAuth/other)
 */

/**
 * Sessions based authentication:
 * 1. user submit login credentials email/password
 * 2. server verifies the credentials agains the DB
 * 3. server create a temporary user session
 * 4. server issues a cooke with session ID and send back to the client as response
 * 5. client sends the cookie with each request
 * 6. server validates its agains the session store & grant access
 * 7. when user logout server destroy the session & clear the cookies
 *
 * Features:
 * 1. every user session is stored in server side (statefull)
 *      a. memory (e.g. file stystem)
 *      b. cache (e.g. redis and memcached) or
 *      3. DB (e.g. mongo, sql)
 * 2. Each user identify by a unique sesssion ID
 *      a. opaque: ref
 *         1. no 3rd party can extract data
 *         2. only issuer (server) can map back to data
 *      b. stored in cookie
 *         1. Signed with secret key
 *         2. protected with flags (server side flags)
 *
 */


/**
 * Cookies:
 * as mozilla:
 * An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to the user's web browser.
 *
 * as yutube:
 * Cookie invented by lou montulli in 1994 from netscape communicator
 * cookie is a small piece of data for a specific website that store on user's computer while browsing the web.
 *
 * It remembers stateful information for the stateless HTTP protocol.
 *
 * Cookie are mainly used for three purpose:
 * 1. Session Management (Loggin, shopping cart, game scores, or anything else the server remembers)
 * 2. Personalization (User preference, themse and other settings)
 * 3. Tracking (Recording and analyzing user behaviour)
 *
 * Note: Cookies are sent with every request
 *
 * In modern world we use these things:
 * Modern APIs for client storage are the Web storage API (localStorage and sessionStorage) and IndexedDB.
 *
 * Set cookie in javascript:
 * document.cookie="username=Pradeep, age:25"
 *
 * get cookie:
 * const value = document.cookie
 *
 * 1. Cookies is a header, just like Authorization and Content-Type
 * 2. set with (Set-Cookie) by server, append with cookie by browser
 *
 *  HTTP/1.1 200 OK
    Content-type: text/html
    Set-Cookie: SESS_ID=9vKnWqiZvuvVsIV1zmzJQeYUgINqXYeS; Domain=example.com; Path=/
 *
 * Security:
 * 1. Signed with (HMAC) with a secret to mitigage tempering
 * 2. rarely encrypted (AES) to protect being read
 *      a. no security concern if read by 3rd party
 *      b. carries no meaningfull data (Just random string)
 * 3. encoded (URL) - not for security but for combat
 *
 * Attributes:
 * 1. Domain and Path (can only be used on a given site & route)
 * 2. Expiration (can only be used until expiry)
 *      a. when omitted, becomes a session cookie
 *      b. gets deleted when browser is closed
 *
 * Flags:
 * 1. HttpOnly (cannot be read with JS on the client-side)
 * 2. Secure (can only sent over encrypted HTTPS channel), and
 * 3. SameSite (can only be sent from the same domain, i.e. no CORS sharing)
 *
 * CSRF:
 * 1. unauthorized actions on behalf of the authenticated user
 * 2. mitigated with a CSRF token (e.g. sent in a separate X-CSRF-TOKEN cookie)
 *
 */


/**
 * Tokens:
 *
 */