const express = require("express");
const { sendMessage, getMessage } = require("../controllers/message.controller.js");
const protectRoute  = require("../middleare/protectRoute.js");

const router = express.Router();

router.get("/:id", protectRoute, getMessage)
router.post("/send/:id", protectRoute, sendMessage)

module.exports = router;