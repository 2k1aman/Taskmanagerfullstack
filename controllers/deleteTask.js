const User = require('../models/user');
const List = require('../models/list');

const deleteTask = async (req,res)=>{
    try{
        const {id} = req.body;
        const existingUser = await User.findByIdAndUpdate(id,{$pull : {list : req.params.id}});
        //$pull because to remove task list from user model also 
        if(existingUser){
            await List.findByIdAndDelete(req.params.id).then(()=>{
                res.status(200).json({
                    message : "task deleted successfully"
                })
           })
        }
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {deleteTask};