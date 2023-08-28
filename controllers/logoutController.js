const knex = require("knex")(require("../knexfile"));

const handleLogout = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.refreshToken) {
    return res.sendStatus(204); // No Content
  }

  const table = await knex("users")
    .join("employee", "employee.employee_id", "users.employee_id")
    .where({ user_refreshToken: cookies.refreshToken });

  if (table.length === 0) {
    // if no user with that refreshToken is found
    return res
      .clearCookie("refreshToken", {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .sendStatus(204); // No Content
  }

  await knex("users")
    .where({ user_refreshToken: cookies.refreshToken })
    .update({ user_refreshToken: null });
  res
    .clearCookie("refreshToken", {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    .sendStatus(204); // No Content
};

module.exports = {
  handleLogout,
};
