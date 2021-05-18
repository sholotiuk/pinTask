"use strict";
/** Working with module and it's export
 * Gives information about result, status and makes message
 * @param res
 * @param status
 * @param message
 */
module.exports = (res, status, message) => {
  res.statusCode = status;
  res.end(message);
};
