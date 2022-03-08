const knex = require("./dbConnection");

// CREATE

function addCharacter(nameToAdd, r_id, w_id) {
  return knex('characters').insert
  ([
      {name: nameToAdd, race_id: r_id, weapon_id: w_id}
  ])
}

function addRace() {

}

function addWeapon() {

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
  console.log("PARAMS: ", params)
  return knex('characters').where({id: c_id}).update(params)
}

function updateRace(r_id, params) {
  
}

function updateWeapon(w_id, params) {
  
}

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

module.exports = { getAllCharacters, getSpecficCharacter, addCharacter, updateCharacter,
                   getAllRaces, getSpecificRace, addRace, updateRace,
                   getAllWeapons, getSpecificWeapon, addWeapon, updateWeapon
};