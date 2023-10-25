/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ChatParticipants", function (table) {
    table.increments("id").primary();
    table.integer("UserID").unsigned();
    table.integer("ChatID").unsigned();

    table
      .foreign("UserID")
      .references("user_id")
      .inTable("Users")
      .onDelete("CASCADE");
    table
      .foreign("ChatID")
      .references("ChatID")
      .inTable("Chats")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ChatParticipants");
};
