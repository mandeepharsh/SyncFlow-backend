const express = require("express");
const { allUsers } = require("../controllers/userController");
const { authorize } = require("../middleware/authorize");
const router = express.Router();

router.route("/").get(authorize, allUsers);

module.exports = router;
