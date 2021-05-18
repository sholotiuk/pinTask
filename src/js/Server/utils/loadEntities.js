"use strict";
const fs = require("fs");
const path = require("path");

/** Working with paths, file paths lib paths
 * Is able to delete or target given paths
 * @param dirPath
 * @param target
 */
module.exports = (dirPath, target) =>
  fs.readdirSync(dirPath).forEach((name) => {
    const filePath = "../" + dirPath + "/" + name;
    const key = path.basename(filePath, ".js");
    try {
      const libPath = require.resolve(filePath);
      console.log(target)
      delete require.cache[libPath];
    } catch (e) {
      return;
    }
    try {
      const entity = require(filePath);
      target.set(key, entity);
    } catch (e) {
      target.delete(name);
    }
  });
