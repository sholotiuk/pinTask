"use strict";

/**Class that initializes users, gives them public key and inserts to the database
 * It also is able to delete some or all the users
 * @type {Person}
 */
module.exports = class Person {
  /** This method initializes users, gives them public key and inserts to the database
   * @param username
   * @param publickey
   * @returns {Promise<*>}
   */
  static async create({ username, publickey }) {
    return global.db.execute(
      `INSERT INTO persons (username, publickey) VALUES (?, ?)`,
      [username, publickey]
    );
  }

  /**This method is able to delete some users from database table
   * @param username
   * @returns {*}
   */
  static delete({ username }) {
    return global.db.execute(
      `DELETE FROM persons WHERE username=?`,[username]
    );
  }

  /**This method is able to delete all the users from database table
   * @returns {*}
   */
  static deleteAll() {
    return global.db.execute(
      `DELETE FROM persons`,
    );
  }
};
