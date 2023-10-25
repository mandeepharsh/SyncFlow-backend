/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Chats", function (table) {
    table.increments("ChatID").primary();
    table.string("ChatName", 100);
    table.boolean("IsGroupChat").notNullable().defaultTo(false);
    table.integer("GroupAdminID").unsigned();
    table.timestamp("CreatedAt").defaultTo(knex.fn.now());

    // Define foreign key constraints
    table.foreign("GroupAdminID").references("user_id").inTable("Users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("Chats");
};
