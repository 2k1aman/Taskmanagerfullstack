const mongoose = require('mongoose');
const url ="mongodb+srv://2k1amankumar:Fw4ahMO5RtoZWtO2@cluster0.rigkaqw.mongodb.net/?retryWrites=true&w=majority"
const dbConnect =() => {
    mongoose.connect(url)
    .then(()=>{
        console.log("connected successfully");
    })
    .catch((err)=>{
        console.error(err);
        console.log("error connecting to db");
    })
}

module.exports = dbConnect;