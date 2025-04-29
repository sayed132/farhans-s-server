const mongoose = require("mongoose");

// database connect
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.SERVER_API);
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
    console.log(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
