const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const accessChat = async (req, res) => {
  const username = req.username;
  const chatMemberId = req.body.member_username;

  if (!username || !chatMemberId) {
    return res.status(400).send("Username and chat member ID are required.");
  }

  try {
    const loggedInUser = await knex("Users")
      .join("Employee", "Employee.employee_id", "Users.employee_id")
      .where({ user_username: username });

    if (loggedInUser.length === 0) {
      return res.status(404).send("Logged-in user not found.");
    }

    const chatMember = await knex("Users").where({
      user_username: chatMemberId,
    });

    if (chatMember.length === 0) {
      return res.status(404).send("Chat member not found.");
    }

    const userID = [loggedInUser[0].user_id, chatMember[0].user_id];

    const chats = await checkAndCreateOneOnOneChat(userID[0], userID[1]);

    return res.status(200).json({ chatID: chats });
  } catch (error) {
    console.error("Error accessing chat:", error);
    return res.status(500).send("Internal server error");
  }
};

async function checkAndCreateOneOnOneChat(userID1, userID2) {
  function findChatIDForUsers(userID1, userID2, data) {
    const chatIDs = {};
    for (const entry of data) {
      if (entry.UserID === userID1 || entry.UserID === userID2) {
        if (chatIDs[entry.ChatID]) {
          return entry.ChatID;
        }
        chatIDs[entry.ChatID] = true;
      }
    }
    return null;
  }

  const chats = await knex("ChatParticipants");
  const existingChat = findChatIDForUsers(userID1, userID2, chats);

  if (existingChat) {
    return existingChat;
  } else {
    const newChat = await knex("Chats").insert({
      ChatName: "One-on-One Chat",
      IsGroupChat: false,
    });

    await knex("ChatParticipants").insert([
      { UserID: userID1, ChatID: newChat[0] },
      { UserID: userID2, ChatID: newChat[0] },
    ]);

    return newChat[0];
  }
}

module.exports = { accessChat };
