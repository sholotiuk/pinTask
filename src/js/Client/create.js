"use strict";
const fs = require('fs');
const fetch = require("node-fetch");
const ENDPOINT = "http://127.0.0.1:8000/private_endpoint";
fetch(`${ENDPOINT}/project/create`, {
  method: "POST",
  body: fs.readFileSync(process.argv.pop()),
})
  .then((res) => res.json())
  .then((reply) => {
    console.log(`Project ${reply.name} have been created`)
  });
