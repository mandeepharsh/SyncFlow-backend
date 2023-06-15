const express = require("express");
const router = express.Router();
require("dotenv").config();
const {getWorkoders , getOneWorkoder} = require("../controllers/workoderController")

router
.route("/")
.get(getWorkoders)

router.get("/:id/workoder",getOneWorkoder)



module.exports = router;