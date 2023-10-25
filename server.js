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
const userRoutes = require("./routes/users");
const chatRoutes = require("./routes/chat");
const corsOption = require("./config/corsOption");
const credentials = require("./middleware/credentials");
const PORT = process.env.PORT;

// Handle options credientials check - before cors
// and fethc cookies credientials requirement
app.use(credentials);

// cross origin resource sharing
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());

app.use("/login", loginRoutes);
app.use("/refresh", refreshRoutes);
app.use("/logout", logoutRoutes);

app.use("/workorders", workoderRoutes);
app.use("/materials", materialsRoutes);
app.use("/location", locationRoutes);
app.use("/employee", employeeRoutes);
app.use("/users", userRoutes);
app.use("/chat", chatRoutes);

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
