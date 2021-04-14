const AWS = require("aws-sdk");
const { contactForm } = require("../../utils/emailTemplates");

AWS.config.update({
  accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
  secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
  region: process.env.AMAZON_REGION,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const {
            user
          } = req.body
        console.log(req.body);
        const params = contactForm(user);
        var sendEmailOnRegister = ses.sendEmail(params).promise();
        sendEmailOnRegister
          .then((data) => {
            console.log("email submitted to SES", data);
            res.json({
              message: `Email has been sent`,
            });
          })
          .catch((error) => {
            console.log("ses email on register", error);
            res.json({
              message: `We could not verify your email. Please try again`,
            });
          });
      } catch (error) {
        res.status(400).json({ error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
