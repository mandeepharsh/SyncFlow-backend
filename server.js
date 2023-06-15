const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const workoderRoutes = require("./routes/workOders")

const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

app.use("/workoders",workoderRoutes)





app.listen(PORT, function () {
    console.log(`Server is running on ${PORT}`);
  });