exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { name: "Web 18" },
        { name: "Web 19" },
        { name: "Web 20" }
      ]);
    });
};
