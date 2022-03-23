const express = require("express")
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const runDB = require("./config/db");
const app = express();
app.use(bodyParser.json());
app.use('/', productRoutes);
app.use('/', orderRoutes);


//Run DB
runDB()






app.listen(5000, () => {
    console.log("Running server on port 5000");
});
