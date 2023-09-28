const knex = require("knex")(require("../knexfile"));
const asyncHandler = require("express-async-handler");

const addMessage = asyncHandler(async (req, res) => {
  const { from, to, message } = req.body;
  const data = {
    message_text: message,
    users: JSON.stringify([from, to]),
    sender_id: from,
  };

  await knex("Chat").insert(data);

  if (data) return res.json({ message: "Message added successfully." });
  return res.json({ message: "Failed to add message to the database" });
});

const getAllMessage = asyncHandler(async (req, res) => {
  const { from, to } = req.body;

  const messages = await knex("message")
    .select("sender_id", "message_text", "users")
    .whereRaw("JSON_CONTAINS(users, ?)", JSON.stringify([from, to]))
    .orderBy("updated_at", "asc");

  const projectedMessages = messages.map((msg) => {
    return {
      fromSelf: msg.sender_id === from,
      message: msg.message_text,
    };
  });
  res.json(projectedMessages);
});

module.exports = {
  addMessage,
  getAllMessage,
};
