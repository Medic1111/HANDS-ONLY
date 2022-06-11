const { Lesson } = require("../models/mongoose");

const getAllLessons = (req, res) => {
  Lesson.find({}, (err, docs) => {
    err ? res.status(404).send("Error occured") : res.status(200).send(docs);
  });
};

module.exports = { getAllLessons };
