export default async function checkAndCreateOneOnOneChat(userID1, userID2) {
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
