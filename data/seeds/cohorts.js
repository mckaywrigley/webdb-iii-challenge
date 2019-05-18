exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { id: 1, name: "Web 18" },
        { id: 2, name: "Web 19" },
        { id: 3, name: "Web 20" }
      ]);
    });
};
