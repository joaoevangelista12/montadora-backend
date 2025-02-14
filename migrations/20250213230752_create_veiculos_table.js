/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

exports.up = function(knex) {
    return knex.schema.createTable('veiculos', function (table) {
      table.increments('id').primary();
      table.string('modelo').notNullable();
      table.string('marca').notNullable();
      table.integer('ano');
      table.integer('montadora_id').unsigned().notNullable(); // Chave estrangeira para a tabela de montadoras
      table.foreign('montadora_id').references('id').inTable('montadoras'); // Define a chave estrangeira
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('veiculos');
  };