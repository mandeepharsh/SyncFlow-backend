const express = require("express");
const { authorize } = require("../middleware/authorize");
const { accessChat } = require("../controllers/chatController");
const router = express.Router();

router.route("/").post(authorize, accessChat);

module.exports = router;
