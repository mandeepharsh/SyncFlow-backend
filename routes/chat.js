const express = require("express");
const { authorize } = require("../middleware/authorize");
const {
  accessChat,
  fetchChatForUser,
} = require("../controllers/chatController");
const router = express.Router();

router.route("/").post(authorize, accessChat);
router.route("/").get(authorize, fetchChatForUser);

module.exports = router;
