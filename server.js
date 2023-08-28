const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const refreshRoutes = require("./routes/refresh");
const workoderRoutes = require("./routes/workOders");
const materialsRoutes = require("./routes/materials");
const locationRoutes = require("./routes/location");
const employeeRoutes = require("./routes/employee");
const loginRoutes = require("./routes/auth");
const logoutRoutes = require("./routes/logout");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/login", loginRoutes);
app.use("/refresh", refreshRoutes);
app.use("/logout", logoutRoutes);

app.use("/workorders", workoderRoutes);
app.use("/materials", materialsRoutes);
app.use("/location", locationRoutes);
app.use("/employee", employeeRoutes);

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
