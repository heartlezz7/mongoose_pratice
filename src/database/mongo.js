const mongoose = require("mongoose");

const MONGODB_URL = "mongodb://localhost:27017/test";

module.exports = async function mongodbConnect() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("CONNECT SUCCESS");
  } catch (error) {
    console.log("Fail to connect mongo db", error);
  }
};
