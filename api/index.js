const mongoose = require("mongoose");
const express = require("express");
const winston = require("winston");
const app = express();

const users = require("./routes/users");

app.use(express.json());
app.use("/api/users", users);

mongoose
  .connect("mongodb://localhost/family-book", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Unable to connect to the database."));

const port = process.env.Port || 3000;
app.listen(port, () => {
  winston.info(`Listening to port ${port}`);
});
