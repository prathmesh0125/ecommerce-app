const { getAllproduct } = require("../controllers/productControler");

const express = require("express");
const router = express.Router();

router.route("/products").get(getAllproduct);

module.exports = router;
