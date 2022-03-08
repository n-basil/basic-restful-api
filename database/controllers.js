const knex = require("./dbConnection");

// CREATE

// READ 

function getSpecficCharacter(c_id) {
  return knex.select("*").from('characters').where({id: c_id});
}

function getSpecificRace(r_id) {
  return knex.select("*").from('races').where({id: r_id})
}

function getSpecificWeapon(w_id) {
  return knex.select('*').from('weapons').where({id: w_id})
}



// UPDATE

// DELETE

// LIST

function getAllCharacters() {
  return knex.select("*").from("characters");
}

function getAllRaces() {
  return knex.select("*").from("races");
}

function getAllWeapons() {
  return knex.select("*").from("weapons");
}

module.exports = { getSpecficCharacter, getSpecificRace, getSpecificWeapon, getAllCharacters, getAllRaces, getAllWeapons };