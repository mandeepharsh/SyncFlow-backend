/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("Chats", function (table) {
    table
      .integer("LatestMessageID")
      .unsigned()
      .references("MessageID")
      .inTable("Messages");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("Chats", function (table) {
    table.dropForeign(["LatestMessageID"]);
  });
};
