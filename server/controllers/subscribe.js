const https = require("https");

const postToChimpApi = (req, res) => {
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
};

module.exports = { postToChimpApi };
