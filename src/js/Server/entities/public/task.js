"use strict";
/** Class that creates a tasks, taking username, allows users to pick tasks
 * Class Tasks also implements submitting and it's date and inserts them to the database tables
 * It also is able to change some table artefacts
 * @type {Task}
 */
module.exports = class Task {
  /**Method creates a tasks, taking username, allows users to pick tasks
   * It also implements tasks.name, tasks.details, roles.name
   * @param username
   * @returns {Promise<*>}
   */
  static async fetch({ username }) {
    return (
      await global.db.execute(
        `select tasks.name, tasks.details, roles.name as role,
        tasks.id as tasks_id, roles.id as roles_id, persons.id as persons_id
        from tasks, signatures, roles, role_links, persons
        where tasks.id = signatures.tasks_id
        and signatures.persons_id is null 
        and signatures.roles_id = role_links.roles_id
        and role_links.roles_id = roles.id 
        and role_links.persons_id = persons.id
        and tasks.id not in (select tasks.id
        from tasks, artefacts, artefact_links
        where artefact_links.tasks_id = tasks.id
        and artefacts.id = artefact_links.artefacts_id
        and artefact_links.artefact_roles_id = 2
        and artefacts.available = false)
        and username=?`,
        [username]
      )
    )[0];
  }

  /** Method allows picking tasks
   * @param persons_id
   * @param tasks_id
   * @param roles_id
   * @returns {Promise<*>}
   */
  static async pick({ persons_id, tasks_id, roles_id }) {
    return global.db.execute(
      `update signatures
      set persons_id = ?
      where tasks_id = ?
      and roles_id = ?`,
      [persons_id, tasks_id, roles_id]
    );
  }

  /**  Method allows fetching picked tasks
   * @param username
   * @returns {Promise<*>}
   */
  static async fetchPicked({ username }) {
    return (
      await global.db.execute(
        `select tasks.name, tasks.details, roles.name as role,
        tasks.id as tasks_id, roles.id as roles_id, persons.id as persons_id
        from tasks, signatures, roles, role_links, persons
        where signatures.persons_id = persons.id
        and roles.id = role_links.roles_id
        and role_links.persons_id = persons.id
        and tasks.id = signatures.tasks_id
        and signatures.data is null
        and username = ?`,
        [username]
      )
    )[0];
  }

  /** Method implements submitting, writes it's date and inserts them to the database tables
   * @param data
   * @param persons_id
   * @param tasks_id
   * @param roles_id
   * @returns {Promise<*>}
   */
  static async submit({ data, persons_id, tasks_id, roles_id }) {
    global.db.execute(
      `update artefacts, artefact_links
        set artefacts.available = true
        where artefacts.id = artefact_links.artefacts_id
        and artefact_links.artefact_roles_id = 1
        and artefact_links.tasks_id = ?`,
      [tasks_id]
    );
    return global.db.execute(
      `update signatures
        set data = ?
        where tasks_id = ?
        and roles_id = ?`,
      [data, tasks_id, roles_id]
    );
  }
};
