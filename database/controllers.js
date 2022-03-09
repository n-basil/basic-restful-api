const knex = require("./dbConnection");

// CREATE

function addCharacter(nameToAdd, r_id, w_id) {
  // return knex.insert({name: nameToAdd, race_id: r_id, weapon_id: w_id}).into('characters')
  return knex('characters').insert({name: nameToAdd, race_id: r_id, weapon_id: w_id})
}

function addRace(nameToAdd) {
  return knex('races').insert({name: nameToAdd})
}

function addWeapon(nameToAdd, w_type, c_id, c_by) {
  return knex('weapons').insert({name: nameToAdd, weapon_type: w_type, character_id: c_id, created_by: c_by})
}

// READ 

function getSpecficCharacter(c_id) {
  return knex.select("*").from('characters').where({id: c_id});  //knex('characters').where({id: c_id}).then
}

function getSpecificRace(r_id) {
  return knex.select("*").from('races').where({id: r_id})
}

function getSpecificWeapon(w_id) {
  return knex.select('*').from('weapons').where({id: w_id})
}



// UPDATE

function updateCharacter(c_id, params) {
  return knex('characters').where({id: c_id}).update(params)
}

function updateRace(r_id, params) {
  return knex('races').where({id: r_id}).update(params)
}

function updateWeapon(w_id, params) {
  return knex('weapons').where({id: w_id}).update(params)
}

// DELETE

function deleteCharacter(c_id) {
  return knex('characters').where({id: c_id}).del()
}

function deleteRace(r_id) {
  return knex('races').where({id: r_id}).del()
}

function deleteWeapon(w_id) {
  return knex('weapons').where({id: w_id}).del()
}

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

module.exports = { getAllCharacters, getSpecficCharacter, addCharacter, updateCharacter, deleteCharacter,
                   getAllRaces, getSpecificRace, addRace, updateRace, deleteRace,
                   getAllWeapons, getSpecificWeapon, addWeapon, updateWeapon, deleteWeapon
};