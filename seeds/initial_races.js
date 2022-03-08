/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('races').del()
  await knex('races').insert([
    {id: 1, name: 'human'},
    {id: 2, name: 'elf'},
    {id: 3, name: 'dwarf'},
    {id: 4, name: 'maia'},
    {id: 5, name: 'hobbit'}
  ]);
};
