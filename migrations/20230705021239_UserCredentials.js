
exports.up = function(knex) {
    return knex.schema.createTable('Users', function(table) {
        table.increments('user_id').primary();
        table.string('user_username').notNullable();
        table.string('user_hashedPassword').notNullable();
        table.string('user_refreshToken');        
        table.integer("employee_id").unsigned().notNullable();
        table.foreign("employee_id").references('employee_id').inTable("Employee");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Users');
};
