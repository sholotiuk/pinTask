"use strict";
const fetch = require("node-fetch");
const ENDPOINT = "http://127.0.0.1:8000/api";
fetch(`${ENDPOINT}/task/fetchPicked`, {
  method: "POST",
  body: JSON.stringify({
    username: process.argv.pop(),
  }),
})
  .then((res) => res.json())
  .then((tasks) => {
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
      const [number, comment] = data.toString().split("//");
      fetch(`${ENDPOINT}/task/submit`, {
        method: "POST",
        body: JSON.stringify({
          ...tasks[parseInt(number)],
          data: JSON.stringify({ comment }),
        }),
      })
        .then((res) => res.json())
        .then(() => process.exit(0));
    });
  });
