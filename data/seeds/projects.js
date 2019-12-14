exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Nemesis",
          description: "Eliminate remaining S.T.A.R.S. members",
          completed: 0
        },
        {
          name: "Tyrant",
          description: "eliminate remaining witnesses",
          completed: 0
        },
        {
          name: "Black Sun",
          description: "attack the firelord on the day of Black Sun",
          completed: 1
        }
      ]);
    });
};
