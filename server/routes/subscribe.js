const express = require("express");
const router = express.Router();
const { postToChimpApi } = require("../controllers/subscribe");

router.post("/api/subscribe", postToChimpApi);

module.exports = router;
