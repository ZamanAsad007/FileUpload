const mongoose = require('mongoose');

require("dotenv").config();

 

exports.connect = function () {
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("✅ DB connected");
    })
    .catch((error) => {
      console.error("❌ DB connection error: ", error);
      process.exit(1);
    });
};
