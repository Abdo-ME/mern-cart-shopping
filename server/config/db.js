const mongoose = require("mongoose")


const connectionString = "mongodb://localhost/react-shopping-cart";
//connect mongo DB
const runDB = () => {
    mongoose .connect(process.env.MONGO_URI||connectionString, {
        useNewUrlParser: true,
        useunifiedTopology: true
    }).then(res => console.log("connection Done")).catch(err => console.log(err));
    
}

module.exports = runDB;