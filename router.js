const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller")

router.get("/", controller.home);
// router.post("/send", controller.send);

module.exports = router;