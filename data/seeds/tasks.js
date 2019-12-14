exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          description: "Eliminate S.T.A.R.S. member: Jill Valentine",
          notes: "Last known location: R.P.D.",
          completed: 0
        },
        {
          project_id: 2,
          description: "Eliminate witness: Leon S. Kennedy ",
          notes: "Last known location: N.E.S.T.",
          completed: 0
        },
        {
          project_id: 3,
          description: "prepare for invasion",
          notes: "",
          completed: 1
        }
      ]);
    });
};
