// Migration for creating the WorkOrderEmployee table


exports.up = function(knex) {
  return knex.schema.createTable('WorkOrderEmployee', function(table) {
    table.integer('work_order_id').unsigned().notNullable();
    table.integer('employee_id').unsigned().nullable();
    table.foreign('work_order_id').references('work_order_id').inTable('WorkOrder');
    table.foreign('employee_id').references('employee_id').inTable('Employee');
    table.unique(['work_order_id', 'employee_id']); // Use unique constraint instead of primary key
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('WorkOrderEmployee');
};
