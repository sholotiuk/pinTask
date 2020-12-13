"use strict";
module.exports = (res, status, message) => {
  res.statusCode = status;
  res.end(message);
};
