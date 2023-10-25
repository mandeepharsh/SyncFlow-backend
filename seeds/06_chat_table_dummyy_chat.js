exports.seed = function (knex) {
  return knex("Chats")
    .del()
    .then(function () {
      return knex("Chats").insert([
        {
          ChatName: "Harsh and rimcy",
          isGroupChat: 0,
          GroupAdminID: null,
          LatestMessageID: null,
        },
      ]);
    });
};
