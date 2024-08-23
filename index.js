const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const app = express();
app.use(express.json());
const port = 3333;

async function connectDatabase() {
  await mongoose.connect("mongodb://localhost:27017");
}

app.listen(port, () => {
  connectDatabase().then(() => {
    console.log("DB connected");
  });
  app.use("/", routes);
  console.log("App is running at port 3333");
});
