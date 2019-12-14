exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "Rocket Launcher",
          description:
            "A rocket launcher designed for Nemesis by the Umbrella Corporation"
        },
        { name: "MiniGun", description: "A gatling gun" },
        { name: "Boomerang", description: "trusty and always comes back" }
      ]);
    });
};
