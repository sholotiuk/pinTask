"use strict";
const fs = require("fs");
const crypto = require("crypto");
const fetch = require("node-fetch");
const ENDPOINT = "http://127.0.0.1:8000/private_endpoint";
const username = process.argv.pop();
const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});
if (username.includes('.js')) {
  (async () => {
    await fetch(`${ENDPOINT}/person/deleteAll`, {
      method: "POST",    
    });
    process.exit(0)
  })()  
} else {
  fetch(`${ENDPOINT}/person/create`, {
    method: "POST",
    body: JSON.stringify({
      username,
      publickey: publicKey,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      fs.writeFileSync(username, privateKey);
      console.log(`User ${username} have been created`);
    });
}


