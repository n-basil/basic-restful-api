const knex = require("./dbConnection");

function getAllMovies() {
  return knex.select("*").from("movies");
}

module.exports = { getAllMovies };