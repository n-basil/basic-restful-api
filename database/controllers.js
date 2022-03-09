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

function getSpecificItem(table, i_id) {
  return knex.select('*').from(table).where({id: i_id})
}

// UPDATE

function updateItem(table, i_id, params) {
  return knex(table).where({id: i_id}).update(params)
}

// DELETE

function deleteItem(table, i_id) {
  return knex(table).where({id: i_id}).del()
}

// LIST

function getAll(input) {
  return knex.select("*").from(input)
}

module.exports = { addCharacter, addRace, addWeapon,
                   getAll, getSpecificItem, deleteItem, updateItem
};
