const db = require("../data/db-config");

module.exports = {
  get,
  add,
  getById
};

function get() {
  return db("project_resources")
    
    .select(
      "resource_id",
      "project_id"
    );
}

function add(pr) {
  return db("project_resources")
    .insert(pr)
    .then(ids => {
      return getById(ids[0]);
    });
}

function getById(id) {
  return db("project_resources")
    .where({ id })
    .first();
}
