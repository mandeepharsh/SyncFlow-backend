/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("Chat", (table) => {
    table.increments("id").primary();
    table.string("message_text").notNullable();
    table.json("users").notNullable();
    table
      .integer("sender_id")
      .unsigned()
      .references("employee_id'")
      .inTable("Employee")
      .onDelete("CASCADE")
      .notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Chat");
};
