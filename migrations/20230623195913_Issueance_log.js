
exports.up = function(knex) {
    return knex.schema.createTable('IssuanceLog', function(table) {
      table.increments('issuanceLog_id').primary();
      table.string('material_number').notNullable();
      table.integer('quantity').notNullable();
      table.string('size').notNullable();
      table.string('receive_date').nullable();
      table.integer('work_order_id').unsigned().notNullable();
      table.foreign('work_order_id').references('work_order_id').inTable('WorkOrder').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('IssuanceLog');
  };
  