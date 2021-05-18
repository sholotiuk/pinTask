"use strict";
/** File creates parses configurations, creates server, implements endpoints
 */
const fs = require("fs");
const http = require("http");
const mysql = require("mysql2/promise");
/**
 * @type {function(*, *, *=): void}
 */
const httpError = require("./utils/httpError");
const loadEntities = require("./utils/loadEntities");

/**
 * Function can Run server and able to return 'Server error' or 'Server started'
 */
(async function main() {

  const entities = {
    public: new Map(),
    private: new Map(),
  };
  loadEntities("./entities/public", entities.public);
  loadEntities("./entities/private", entities.private);

  global.config = JSON.parse(fs.readFileSync("config.json"));
  global.db = await mysql.createConnection(global.config.mysqlConfig);

  http
    .createServer(async (req, res) => {
      const url = req.url === "/" ? "/index.html" : req.url;
      const [endpoint, name, action] = url.substring(1).split("/");
      if (
        endpoint === "api" ||
        global.config.privateApiEndpoints.includes(endpoint)
      ) {
        const entity = (endpoint === "api"
          ? entities.public
          : entities.private
        ).get(name);
        const chunks = [];
        req.on("data", (chunk) => chunks.push(chunk));
        req.on("end", async () => {
          try {
            console.log('chunks', chunks.length ? JSON.parse(chunks.join('')) : [])
            const result = await entity[action](chunks.length ? JSON.parse(chunks.join('')) : []);
            if (typeof result === "object") {
              res.end(JSON.stringify(result));
            } else if (
              typeof result !== "string" &&
              !(result instanceof Buffer)
            ) {
              httpError(res, 500, "Server error");
              return;
            } else res.end(result);
          } catch (e) {
            console.log(e);
            httpError(res, 500, "Server error");
          }
        });
      } else {
        const path = `./static${url}`;
        fs.exists(path, (exists) => {
          if (exists) fs.createReadStream(path).pipe(res);
          else httpError(res, 404, "File is not found");
        });
      }
    })
    .listen(global.config.port, () => console.log('Server started'));
})();
