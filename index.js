const express = require("express");

const app = express();

app.use(express.json());

const cohortRoutes = require("./routes/cohorts");

app.use("/api/cohorts", cohortRoutes);

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});
