const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.refreshToken) {
    return res.sendStatus(401);
  }

  const refreshToken = cookies.refreshToken;
  // If username or password is provided
  try {
    const table = await knex("users")
      .join("employee", "employee.employee_id", "users.employee_id")
      .where({ user_refreshToken: refreshToken });

    // If no user is found, return 404
    if (table.length === 0) {
      return res.sendStatus(403); // Forbidden
    }

    let user = table[0];
    jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, decoded) => {
      if (err || decoded.username !== user.user_username) {
        return res.sendStatus(403);
      } // Forbidden
      const token = jwt.sign(
        {
          username: user.user_username,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "15 min",
        }
      );

      res.json({ token });
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = {
  handleRefreshToken,
};
