// Migration for creating the Location table

exports.up = function(knex) {
    return knex.schema.createTable('Location', function(table) {
      table.increments('location_id').primary();
      table.string('location').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Location');
  };
  
