const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const { truncate } = require("fs/promises");
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:5000" }));

// DB CONNECTION
mongoose.connect(`${process.env.DB_URI}`, (err) =>
  err ? console.log(err) : console.log("DB CONNECTED")
);

// SCHEMA

const lessonSchema = new mongoose.Schema({
  explanation: String,
  question: String,
  answers: Array,
});

const Lesson = new mongoose.model("Lesson", lessonSchema);

app.get("/api", (req, res) => {
  Lesson.find({}, (err, docs) => {
    err ? res.status(404).send("Error occured") : res.status(200).send(docs);
  });
});

// UNHANDLED ROUTES
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(process.env.PORT || 3003, () => console.log("Server Spinning"));
