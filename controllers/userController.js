const knex = require("knex")(require("../knexfile"));

const allUsers = async (req, res) => {
  const keywords = req.query.search;
  console.log(keywords);
  try {
    const usersTable = await knex("users")
      .join("employee", "employee.employee_id", " users.employee_id")
      .select("*");

    const searchedUsers = await usersTable.filter((user) =>
      user.employee_name.toLowerCase().includes(keywords)
    );
    if (searchedUsers.length === 0) {
      return res.status(404).json({
        message: "No user with this name in the database",
      });
    }

    res.status(200).json(searchedUsers);
  } catch (error) {}
};

module.exports = {
  allUsers,
};
