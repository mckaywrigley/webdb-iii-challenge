const express = require("express");
const knex = require("knex");
const sqlite3 = require("sqlite3");

const router = express.Router();

const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ error: "Please provide a name for the cohort." });
  }
  db("cohorts")
    .insert(req.body)
    .then(cohort => {
      return res.status(201).json(cohort);
    })
    .catch(err => {
      return res
        .status(400)
        .json({ error: "The cohort could not be saved to the database." });
    });
});

router.get("/", (req, res) => {
  db("cohorts")
    .then(cohorts => {
      return res.status(200).json(cohorts);
    })
    .catch(err => {
      return res.status(404).json({ error: "Cohorts could not be found." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("cohorts")
    .where({ id })
    .then(cohort => {
      return res.status(200).json(cohort);
    })
    .catch(err => {
      return res.status(404).json({ error: "Cohorts could not be found." });
    });
});

router.get("/:id/students", (req, res) => {
  const { id } = req.params;
  db("students")
    .where({ cohort_id: id })
    .then(students => {
      return res.status(200).json(students);
    })
    .catch(err => {
      return res
        .status(404)
        .json({ error: "Students could not be found for that cohort." });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  db("cohorts")
    .where({ id })
    .update(req.body)
    .then(cohort => {
      res.status(200).json(cohort);
    })
    .catch(cohort => {
      res.status(500).json({ error: "Cohort could not be updated." });
    });
});

module.exports = router;
