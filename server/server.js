require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const runDB = require("./config/db");
const app = express();
app.use(bodyParser.json());

//Run DB
runDB()
app.use('/', productRoutes);
app.use('/', orderRoutes);





if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static('public'));

    app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"))
} else {
    app.get('/' , (req,res) => res.send("API is Running"))
}

const PORT = process.env.PORT
app.listen(PORT ||5000, () => {
    console.log("Running server on port 5000");
});
