"use strict";
module.exports = class Person {
  static async create({ username, publickey }) {
    return global.db.execute(
      `INSERT INTO persons (username, publickey) VALUES (?, ?)`,
      [username, publickey]
    );
  }
  static delete({ username }) {
    return global.db.execute(
      `DELETE FROM persons WHERE username=?`,[username]
    );
  }
  static deleteAll() {
    return global.db.execute(
      `DELETE FROM persons`,
    );
  }
};
