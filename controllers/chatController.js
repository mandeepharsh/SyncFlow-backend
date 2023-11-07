const knex = require("knex")(require("../knexfile"));
require("dotenv").config();
// I want to check if there is chat of both the users with each other

// const accessChat = async (req, res) => {
//   const username = req.username;
//   const chatMemberId = req.body.member_username;
//   // if the chat betweem the user and the user exsist then send that chat back other wise create a new chat

//   if (!username && !chatMemberId) {
//     return res.status(400).send("Username and chat member ID are required.");
//   }
//   const logedInUser = await knex("users")
//     .join("employee", "employee.employee_id", " users.employee_id")
//     .where({ user_username: username });
//  if (logedInUser.length === 0){
//   return res.status(404).send("User not found.");
//  }
//     // get the name of the user
//   const chatMemeber = await knex("users").where({
//     user_username: chatMemberId,
//   });
//   // if the chat memeber we are trying to acess dosent' exsist
//   if (chatMemeber.length === 0){
//     return res.status(404).send("User not found.");
//    }

//   const userID = [logedInUser[0].user_id, chatMemeber[0].user_id];
//   const chats = await knex("ChatParticipants")
//     .join("Chats", "Chats.ChatID", "ChatParticipants.ChatID")
//     .whereIn("ChatParticipants.userID", userID);
// };
const accessChat = async (req, res) => {
  const username = req.username;
  const chatMemberId = req.body.member_username;
  // if the chat between the user and the user exists, then send that chat back; otherwise, create a new chat

  if (!username || !chatMemberId) {
    return res.status(400).send("Username and chat member ID are required.");
  }

  try {
    // Check if the logged-in user exists
    const loggedInUser = await knex("Users")
      .join("Employee", "Employee.employee_id", "Users.employee_id")
      .where({ user_username: username });

    if (loggedInUser.length === 0) {
      return res.status(404).send("Logged-in user not found.");
    }

    // Check if the chat member exists
    const chatMember = await knex("Users").where({
      user_username: chatMemberId,
    });

    if (chatMember.length === 0) {
      return res.status(404).send("Chat member not found.");
    }

    const userID = [loggedInUser[0].user_id, chatMember[0].user_id];

    // Check if a one-on-one chat already exists or create a new one
    const chats = await checkAndCreateOneOnOneChat(userID[0], userID[1]);

    // Now you can send the 'chats' data back as a response or perform other actions.
    return res.status(200).json({ chatID: chats });
  } catch (error) {
    console.error("Error accessing chat:", error);
    return res.status(500).send("Internal server error");
  }
};

// Function to check and create one-on-one chat (place this outside the accessChat function)
async function checkAndCreateOneOnOneChat(userID1, userID2) {
  // Check if a one-on-one chat exists between the two users
  const existingChat = await knex("Chats").where({ IsGroupChat: false });

  console.log(existingChat);

  if (existingChat) {
    return existingChat.ChatID;
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
