const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();


const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());


app.get("/",((req,res) =>{
  res.json("it is working")
}))





app.listen(PORT, function () {
    console.log(`Server is running on ${PORT}`);
  });