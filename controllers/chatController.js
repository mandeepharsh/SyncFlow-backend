const knex = require("knex")(require("../knexfile"));
require("dotenv").config();
import checkAndCreateOneOnOneChat from "../helperFunctions/CheckAndCreateOneOnOne";

const accessChat = async (req, res) => {
  const username = req.username;
  const chatMemberId = req.body.member_username;
  // If your username and chatMemberId does not exsist return an error
  if (!username || !chatMemberId) {
    return res.status(400).send("Username and chat member ID are required.");
  }

  try {
    const loggedInUser = await knex("Users")
      .join("Employee", "Employee.employee_id", "Users.employee_id")
      .where({ user_username: username });
    // If the logedIn user is dosen't exsist send an error
    if (loggedInUser.length === 0) {
      return res.status(404).send("Logged-in user not found.");
    }
    const chatMember = await knex("Users").where({
      user_username: chatMemberId,
    });
    // If the chatMember Id send in the body dosen't exsist return error

    if (chatMember.length === 0) {
      return res.status(404).send("Chat member not found.");
    }

    const userID = [loggedInUser[0].user_id, chatMember[0].user_id];
    // Check if a chat between the user already exsist and if it dosen't return a new one
    const chatId = await checkAndCreateOneOnOneChat(userID[0], userID[1]);
    const chats = await knex("chats").where({ ChatID: chatId });

    return res.status(200).json(chats);
  } catch (error) {
    console.error("Error accessing chat:", error);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { accessChat };
