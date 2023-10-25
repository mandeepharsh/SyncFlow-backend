const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const handleLogin = async (req, res) => {
  const { username, password } = req.body;

  // If no username or password is provided
  if (!username || !password) {
    return res.status(400).json({
      msg: "username and password are required",
    });
  }

  // If username or password is provided
  try {
    const table = await knex("users")
      .join("employee", "employee.employee_id", "users.employee_id")
      .where({ user_username: username });

    // If no user is found, return 404
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
        expiresIn: "1d",
      }
    );

    const refreshToken = jwt.sign(
      {
        username: user.user_username,
      },
      process.env.REFRESH_KEY,
      {
        expiresIn: "1d",
      }
    );

    await knex("users")
      .where({ user_username: username })
      .update({ user_refreshToken: refreshToken });

    // Set refreshToken as cookie because it is httpOnly adn can't be accessed using JS,
    // It increases security
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({
      error: error,
      msg: "internal server error",
    });
  }
};

module.exports = {
  handleLogin,
};
