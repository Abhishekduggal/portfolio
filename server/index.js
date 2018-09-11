require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { json } = require("body-parser");
const port = process.env.PORT || 3001;

const app = express();
app.use(json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, function() {
  console.log(`listening to port: ${port}`);
});
