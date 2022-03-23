const mongoose = require("mongoose")


const connectionString = "mongodb://localhost/react-shopping-cart";
//connect mongo DB
const runDB = () => {
    mongoose .connect(connectionString, {
        useNewUrlParser: true,
        useunifiedTopology: true
    }).then(res => console.log("connection Done")).catch(err => console.log(err));
    
}

module.exports = runDB;