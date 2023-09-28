const knex = require("knex")(require("../knexfile"));
require("dotenv").config();
const getEmployees = async (_req, res) => {
  try {
    const table = await knex("employee");
    if (table.length === 0) {
      res.status(400).json("Employees not found");
    }
    res.status(200).json(table);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

const getUserInfo = async (req, res) => {
  try {
    const table = await knex("users")
      .join("employee", "employee. employee_id", "users.employee_id")
      .where({ user_username: req.username });

    if (table.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    }

    const user = table[0];
    const { user_username, employee_role, employee_id, employee_name } = user;

    const userInfo = {
      username: user_username,
      role: employee_role,
      employee_id: employee_id,
      name: employee_name,
    };
    res.json(userInfo);
  } catch (error) {
    res.status(500).json({
      error: error,
      msg: "internal server error",
    });
  }
};

module.exports = {
  getEmployees,
  getUserInfo,
};
