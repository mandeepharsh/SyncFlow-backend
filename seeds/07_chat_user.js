exports.seed = function (knex) {
  return knex("ChatParticipants")
    .del()
    .then(function () {
      return knex("ChatParticipants").insert([
        {
          UserID: 1,
          ChatID: 1,
        },
        {
          UserID: 2,
          ChatID: 1,
        },
      ]);
    });
};
