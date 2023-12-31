const User = require('../models/user');
const List = require('../models/list');

const updateTask = async (req,res)=>{
    try{
        const {title ,body } = req.body;
        
           const list  = await List.findByIdAndUpdate(req.params.id , {title,body});
           list.save().then(()=>{
                res.status(200).json({
                    message : "task updated successfully"
                })
           })
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {updateTask};