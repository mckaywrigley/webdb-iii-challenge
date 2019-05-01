const express = require("express");
const knex = require("knex");
const sqlite3 = require("sqlite3");

const app = express();

app.use(express.json());

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});
