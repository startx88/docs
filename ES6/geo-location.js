/******
 * What is geolocation?:
 * Geolocation is a way to determine the location of a device.
 *
 * Note:
 * 1. The Geolocation API will only work on secure contexts such as HTTPS
 * 2. If your site is hosted on an non-secure origin (such as HTTP) the requests to get the users location will no longer function.
 *
 * How to use:
 * 1. Create a new instance of the Geolocation class
 * 2. Call the getCurrentPosition method to get the users location
 * 3. Call the watchPosition method to get the users location continuously
 * 4. Call the clearWatch method to stop getting the users location
 *
 * */


class Geolocation {
  constructor(options) {
    this.options = options;
    let location = navigator.geolocation;
  }
}
