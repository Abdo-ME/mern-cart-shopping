const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const app = express();
app.use(bodyParser.json());
app.use('/',router)

const connectionString = "mongodb://localhost/react-shopping-cart";


//connect mongo DB
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useunifiedTopology: true
}).then(res => console.log("connection Done")).catch(err => console.log(err));
app.listen(3001, () => {
    console.log("Running server on port 3001");
});
