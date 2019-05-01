exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Mckay", cohort_id: 1 },
        { name: "Tasha", cohort_id: 1 },
        { name: "Steve", cohort_id: 2 }
      ]);
    });
};
