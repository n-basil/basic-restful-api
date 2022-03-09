/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('races').del()
  await knex('races').insert([
    {name: 'human'},
    {name: 'elf'},
    {name: 'dwarf'},
    {name: 'maia'},
    {name: 'hobbit'}
  ]);
};
