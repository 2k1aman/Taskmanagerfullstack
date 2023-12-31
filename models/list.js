const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    body:{
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now(),
    },
    updateAt : {
        type : Date,
        required : true,
        default : Date.now(),
    },
    user:[  {
        type : mongoose.Types.ObjectId,
        ref : "user"
        }
    ]
})

module.exports = mongoose.model("list",listSchema);