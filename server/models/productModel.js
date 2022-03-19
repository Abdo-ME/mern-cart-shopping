const mongoose = require("mongoose");
const productShema = require("../schema/productSchems");
const Product = mongoose.model("product", productShema);

// exports.model = Product
module.exports = Product