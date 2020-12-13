"use strict";
const fs = require('fs');
const fetch = require("node-fetch");
const ENDPOINT = "http://127.0.0.1:8000/private_endpoint";

(async () => {
  await fetch(`${ENDPOINT}/project/clear`, {
    method: "POST"  
  })
})()

  