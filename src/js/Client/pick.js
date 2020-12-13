"use strict";
const fetch = require("node-fetch");
const ENDPOINT = "http://127.0.0.1:8000/api";
fetch(`${ENDPOINT}/task/fetch`, {
  method: "POST",
  body: JSON.stringify({
    username: process.argv.pop(),
  }),
})
  .then((res) => res.json())
  .then((tasks) => {
    console.log(tasks)
    console.log(
      tasks
        .map(
          ({ name, details, role }, id) => `#${id} ${name}
            Role: ${role}
            Details: ${details}`
        )
        .join("\n\n")
    );
    process.stdin.on("data", (data) => {
      fetch(`${ENDPOINT}/task/pick`, {
        method: "POST",
        body: JSON.stringify({
          ...tasks[parseInt(data)],
        }),
      })
        .then((res) => res.json())
        .then(() => process.exit(0));
    });
  });
