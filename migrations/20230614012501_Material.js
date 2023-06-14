// Migration for creating the Material table

exports.up = function(knex) {
    return knex.schema.createTable('Material', function(table) {
      table.increments('material_id').primary();
      table.string('material_number').notNullable();
      table.integer('quantity').notNullable();
      table.string('size').notNullable();
      table.boolean('received').defaultTo(false);
      table.date('receive_date').nullable();
      table.integer('work_order_id').unsigned().notNullable();
      table.foreign('work_order_id').references('work_order_id').inTable('WorkOrder').onDelete('CASCADE');
      table.integer('location_id').unsigned().nullable();
      table.foreign('location_id').references('location_id').inTable('Location').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Material');
  };
  