// Migration for creating the Employee table

exports.up = function (knex) {
  return knex.schema.createTable("Employee", function (table) {
    table.increments("employee_id").primary();
    table.string("employee_name").notNullable();
    table.string("employee_number").notNullable();
    table.string("employee_role").notNullable();
    table.string("profile_picture_url");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Employee");
};
