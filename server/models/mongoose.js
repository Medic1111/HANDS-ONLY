const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  explanation: String,
  question: String,
  answers: Array,
});

const Lesson = new mongoose.model("Lesson", lessonSchema);

module.exports = { Lesson };
