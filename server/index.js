const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const https = require("https");
const app = express();
// MY REQUIRES
const getAllRoute = require("./routes/getData");

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:5000" }));
// MY MIDDLEWARES
app.use("/", getAllRoute);

// DB CONNECTION
mongoose.connect(`${process.env.DB_URI}`, (err) =>
  err ? console.log(err) : console.log("DB CONNECTED")
);

// MAILCHIMP
app.post("/api/subscribe", (req, res) => {
  const { FNAME, LNAME, email_address } = req.body;

  const builtUrl = `${process.env.MAIL_CHIMP_URL}`;
  // Authentication:
  const options = {
    method: "POST",
    auth: `medic1111:${process.env.MAIL_CHIMP_KEY}`,
  };
  // DATA:
  const mailChimpData = {
    members: [
      {
        email_address,
        status: "subscribed",
        merge_fields: {
          FNAME,
          LNAME,
        },
      },
    ],
  };
  // DATA STRINGIFIED AS REQUIRED BY CHIMP:
  const stringifiedData = JSON.stringify(mailChimpData);
  // API REQUEST:
  const request = https.request(builtUrl, options, (response) => {
    if (response.statusCode === 200) {
      res.status(200).send({ message: "Successfully Subscribed" });
    } else {
      res.status(500).send({ message: "Unable to subscribe" });
    }
  });
  request.write(stringifiedData);
  request.end();
});

// UNHANDLED ROUTES
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(process.env.PORT || 3003, () => console.log("Server Spinning"));
