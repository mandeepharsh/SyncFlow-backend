const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const accessChat = async (req, res) => {
  const username = req.username;
  const chatMemberId = req.body.member_username;
  if (!username || !chatMemberId) {
    return res.status(400).send("Username and chat member ID are required.");
  }
  const logedInUser = await knex("users")
    .join("employee", "employee.employee_id", " users.employee_id")
    .where({ user_username: username });

  const chatMemeber = await knex("users").where({ user_id: chatMemberId });
  console.log(logedInUser);
  const userID = [logedInUser[0].user_id, chatMemeber[0].user_id];
  const chats = await knex("ChatParticipants")
    .join("Chats", "Chats.ChatID", "ChatParticipants.ChatID")
    .whereIn("ChatParticipants.userID", userID);
};

module.exports = { accessChat };
