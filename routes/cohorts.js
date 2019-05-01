const express = require("express");
const knex = require("knex");
const sqlite3 = require("sqlite3");

const router = express.Router();

const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "Please provide a name for the cohort." });
  }
  db("cohorts")
    .insert(req.body)
    .then(cohort => {
      res.status(201).json(cohort);
    })
    .catch(err => {
      res
        .status(400)
        .json({ error: "The cohort could not be saved to the database." });
    });
});

module.exports = router;
