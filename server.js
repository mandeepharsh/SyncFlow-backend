const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const workoderRoutes = require("./routes/workOders")
const materialsRoutes = require("./routes/materials")
const locationRoutes = require("./routes/location")
const employeeRoutes = require("./routes/employee")
const PORT = process.env.PORT;


app.use(cors()); 
app.use(express.json());

app.use("/workorders",workoderRoutes)
app.use("/materials",materialsRoutes)
app.use("/location",locationRoutes)
app.use("/employee",employeeRoutes)



app.listen(PORT, function () {
    console.log(`Server is running on ${PORT}`);
  });