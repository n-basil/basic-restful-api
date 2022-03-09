/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('weapons').del()
  await knex('weapons').insert([
    {name: 'Anduril', weapon_type: 'sword', character_id: 1, created_by: 'Telchar the Dwarf of Nogrod'},
    {name: 'Bow of the Galadhrim', weapon_type: 'bow', character_id: 2, created_by: 'Elves of Lothlorien'},
    {name: 'walking axe', weapon_type: 'axe', character_id: 3, created_by: 'Dwarves of Moria'},
    {name: 'Glamdring', weapon_type: 'sword', character_id: 4, created_by: 'Turgon the Elven King of Gondolin'},
    {name: 'Sting', weapon_type: 'sword', character_id: 5, created_by: 'Gondolin'},
    {name: 'Frying Pan', weapon_type: 'cookware', character_id: 6, created_by: 'the Hobbits of the Shire'},
    {name: 'Staff Of Power', weapon_type: 'staff', character_id: 8, created_by: 'Elves'},
    {name: 'Hadhafang', weapon_type: 'sword', character_id: 9, created_by: 'Elves'}
  ]);
};
