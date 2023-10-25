exports.seed = function (knex) {
  return knex("Messages")
    .del()
    .then(function () {
      return knex("Messages").insert([
        {
          SenderUserID: 1,
          Content: "Hello friennds",
          ChatID: 1,
        },
      ]);
    });
};
