/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('weapons', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.string('weapon_type');
        table.integer('character_id');
        table.string('created_by');
    });   
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('weapons');
};
