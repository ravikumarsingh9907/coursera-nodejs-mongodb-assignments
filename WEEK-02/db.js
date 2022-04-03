const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/CourseraNodeJs", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(() => {
    console.log("Something went wrong, Not Connected to Database");
  });
