const userModel = require("./user.model");
const taskModel = require("./task.model");

exports.mongodb = {
  user: userModel,
  task: taskModel,
};
