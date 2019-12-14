exports.up = function(knex) {
  return knex.schema.createTable("project_resources", tbl => {
    tbl.primary(["project_id", "resource_id"]);

    tbl
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects");

    tbl
      .integer("resource_id")
      .notNullable()
      .references("id")
      .inTable("resources");
      
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("project_resources");
};
 