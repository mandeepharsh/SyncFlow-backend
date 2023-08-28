const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

const userLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      msg: "username and password are required",
    });
  }

  try {
    const table = await knex("users")
      .join("employee", "employee. employee_id", "users.employee_id")
      .where({ user_username: username });
    if (table.length === 0) {
      return res.status(404).json({ msg: "Invalid credentials" });
    }

    let user = table[0];
    const match = await bcrypt.compare(password, user.user_hashedPassword);

    if (!match) {
      return res.status(401).json({
        msg: "Invalid credentials",
      });
    }
    const token = jwt.sign(
      {
        username: user.user_username,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: 60 * 60 * 24,
      }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({
      error: error,
      msg: "internal server error",
    });
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
    console.log(userInfo);
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
  userLogin,
  getUserInfo,
};
