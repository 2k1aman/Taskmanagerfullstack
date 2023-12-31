const User = require('../models/user');
const List = require('../models/list');

const getTask = async (req,res)=>{
    try{
        const list  = await List.find({user : req.params.id}).sort({createdAt : 1});
        if(list.length != 0){
            res.status(200).json({
                list : list
            })
        }
        else {
            res.status(200).json({
                "message" : "no task"
            })
        }
        

    }
    catch(error){
        console.log(error);
    }
}

module.exports = {getTask};