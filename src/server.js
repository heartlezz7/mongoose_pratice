const express = require("express");
const app = express();

require("dotenv").config();

const mongodbConnect = require("./database/mongo");

const { mongodb } = require("./models/mongo.model");

// conntect to mongodb
mongodbConnect();

app.post("*", express.json());
app.patch("*", express.json());
app.put("*", express.json());

//create data
app.post("/", async (req, res) => {
  const { name, age } = req.body;

  await mongodb.user.create({ name, age });

  res.status(201).send("created");
});

//get user data
app.get("/all", async (req, res) => {
  const data = await mongodb.user.find({});
  res.status(200).json({ users: data });
});

//update user
app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = await mongodb.user.updateOne({ _id: id }, { name });
  res.status(200).json({ data: user });
});

//delete user
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await mongodb.user.deleteOne({ _id: id });
  res.status(204);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server run on port:", port);
});
