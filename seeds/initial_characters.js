/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('characters').del()
  await knex('characters').insert([
    {id: 1, name: 'Aragorn', race_id: 1, weapon_id: 1},
    {id: 2, name: 'Legolas', race_id: 2, weapon_id: 2},
    {id: 3, name: 'Gimli', race_id: 3, weapon_id: 3},
    {id: 4, name: 'Gandalf the Wise', race_id: 4, weapon_id: 4},
    {id: 5, name: 'Frodo Baggins', race_id: 5, weapon_id: 5},
    {id: 6, name: 'Samwise Gamgee', race_id: 5, weapon_id: 6},
    {id: 7, name: 'Boromir', race_id: 1, weapon_id: null},
    {id: 8, name: 'Saruman', race_id: 4, weapon_id: 7},
    {id: 9, name: 'Elrond', race_id: 2, weapon_id: 8},
    {id: 10, name: 'Gollum', race_id: 5, weapon_id: null},

  ]);
};
