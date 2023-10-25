/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Messages", function (table) {
    table.increments("MessageID").primary();
    table.integer("SenderUserID").unsigned();
    table.text("Content");
    table.integer("ChatID").unsigned();
    table.timestamp("CreatedAt").defaultTo(knex.fn.now());

    // Define foreign key constraints
    table.foreign("SenderUserID").references("user_id").inTable("Users");
    table.foreign("ChatID").references("ChatID").inTable("Chats");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("Messages");
};
