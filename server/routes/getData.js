const express = require("express");
const router = express.Router();
const { getAllLessons } = require("../controllers/getAll");

router.get("/api", getAllLessons);

module.exports = router;
