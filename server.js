const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Shubham Raj" });
});

require("./app/routes/email.routes.js")(app);

app.listen(3300, () => {
  console.log("Server is listening on port 3100");
});
