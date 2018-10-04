const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
var mongoose = require("mongoose");
var db = require("./models");
const routes = require("./routes");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
var db = require("./models");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoPaiMai";

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
mongoose.connect(MONGODB_URI
);
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
