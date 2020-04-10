module.exports = app => {
  const User = require("../controllers/email.controller.js");
  app.get("/getEmail", User.getEmail);
  app.get("/getEmailBody/:_id", User.getEmailBody);
};
