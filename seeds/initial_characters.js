/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('characters').del()
  await knex('characters').insert([
    {name: 'Aragorn', race_id: 1, weapon_id: 1},
    {name: 'Legolas', race_id: 2, weapon_id: 2},
    {name: 'Gimli', race_id: 3, weapon_id: 3},
    {name: 'Gandalf the Wise', race_id: 4, weapon_id: 4},
    {name: 'Frodo Baggins', race_id: 5, weapon_id: 5},
    {name: 'Samwise Gamgee', race_id: 5, weapon_id: 6},
    {name: 'Boromir', race_id: 1, weapon_id: null},
    {name: 'Saruman', race_id: 4, weapon_id: 7},
    {name: 'Elrond', race_id: 2, weapon_id: 8},
    {name: 'Gollum', race_id: 5, weapon_id: null}
  ])
};
