require("dotenv").config();
const mongoose = require("mongoose");
const connectionstring = process.env.MONGOOSEURL;
mongoose
  .connect(connectionstring)
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });
module.exports = mongoose;
