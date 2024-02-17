const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errormiddlewares=require("./middleware/error")
app.use(bodyParser.json());
// route imports
const product = require("./routes/productRoute");
app.use("/api/v1", product);
// middlewar for error handling
app.use(errormiddlewares)
module.exports = app;
