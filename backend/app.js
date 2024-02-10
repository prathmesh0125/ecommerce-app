const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// route imports
const product = require("./routes/productRoute");
app.use("/api/v1", product);
module.exports = app;
