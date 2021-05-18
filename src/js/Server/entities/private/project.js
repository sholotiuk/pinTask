"use strict";
/** Class that creates a project, taking name, teams and tasks
 * Class Project also implements different artefacts and inserts them to the database tables
 * It also is able to delete some or all table artefacts
 * @type {Project}
 */
module.exports = class Project {
    /** Method creates a project, taking name, teams and tasks
     * It also implements different artefacts and inserts them to the database tables
     * @param name
     * @param teams
     * @param tasks
     * @returns {Promise<{name, id: number}>}
     */
  static async create({ name, teams, tasks }) {
    tasks.forEach((task) => {
      if (!task.yields) task.yields = [];
      if (!task.requires) task.requires = [];
    });    
    const id = (
      await global.db.execute("INSERT INTO projects (name) VALUES (?)", [name])
    )[0].insertId;    
    const artefacts = [
      ...new Set(
        tasks
          .map(({ yields, requires }) => [...yields, ...requires])
          .reduce((acc, arr) => [...acc, ...arr], [])
      ),
    ];

    const artefactIds = Object.fromEntries(
      (
        await Promise.all(
          artefacts
            .map((name) =>
              global.db.execute(
                "INSERT INTO artefacts (name, projects_id) VALUES (?, ?)",
                [name, id]
              )
            )
            .map((promise) => promise.then(([res]) => res.insertId))
        )
      ).map((id, i) => [artefacts[i], id])
    );

    const roleIds = Object.fromEntries(
      await Promise.all(
        Object.entries(teams).map(async ([name, persons]) => {
          const roleId = (
            await global.db.execute(
              "INSERT INTO roles(name, projects_id) VALUES(?, ?)",
              [name, id]
            )
          )[0]?.insertId;          
          persons.map(async (person) => {            
            const personId = (
              await global.db.execute(
                "SELECT id FROM persons WHERE username = ?",
                [person]
              )
            )[0]?.id;
            if (!personId) return;            
            global.db.execute(
              "INSERT INTO role_links(roles_id, persons_id) VALUES(?, ?)",
              [roleId, personId]
            );
          });
          return [name, roleId];
        })
      )
    );

    const taskIds = Object.fromEntries(
      await Promise.all(
        tasks.map(async (task) => {
          const taskId = (
            await global.db.execute(
              "INSERT INTO tasks (name, details, projects_id) VALUES (?, ?, ?)",
              [task.name, task.details, id]
            )
          )[0]?.insertId;
          task.yields.map((artefact) =>
            global.db.execute(
              "INSERT INTO artefact_links(artefact_roles_id, artefacts_id, tasks_id) VALUES(1, ?, ?)",
              [artefactIds[artefact], taskId]
            )
          );
          task.requires.map((artefact) =>
            global.db.execute(
              "INSERT INTO artefact_links(artefact_roles_id, artefacts_id, tasks_id) VALUES(2, ?, ?)",
              [artefactIds[artefact], taskId]
            )
          );
          task.teams.map((team) =>
            global.db.execute(
              "INSERT INTO signatures(roles_id, tasks_id) VALUES(?, ?)",
              [roleIds[team], taskId]
            )
          );
          return [task.name, taskId];
        })
      )
    );
    return {id, name};
  }

    /** Method is able to delete some or all table artefacts
     * It also connected to database tables and works with them
     * @returns {Promise<void>}
     */
  static async clear() {
    const tables = ['projects', 'artefacts', 'roles', 'role_links', 'tasks', 'artefact_links', 'signatures'];
    await global.db.execute(
      `SET FOREIGN_KEY_CHECKS=0`         
    );
    await Promise.all(tables.map(table => 
        global.db.execute(
          `TRUNCATE ${table}`         
        )
    ))
  }
};
