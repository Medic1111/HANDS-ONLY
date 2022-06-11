const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const app = express();

// MY REQUIRES
const getAllRoute = require("./routes/getData");
const postToChimpApi = require("./routes/subscribe");

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:5000" }));

// MY MIDDLEWARES
app.use("/", getAllRoute);
app.use("/", postToChimpApi);

// DB CONNECTION
mongoose.connect(`${process.env.DB_URI}`, (err) =>
  err ? console.log(err) : console.log("DB CONNECTED")
);

// UNHANDLED ROUTES
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(process.env.PORT || 3003, () => console.log("Server Spinning"));
