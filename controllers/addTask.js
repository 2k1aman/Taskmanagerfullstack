const User = require('../models/user');
const List = require('../models/list');

const addTask = async (req,res)=>{
    try{
        const {title , body , id } = req.body;
        const existingUser = await User.findById(id);
        if(existingUser){
            const list = new List({title , body , user : existingUser});
            await list.save().then(()=>{
                res.status(200).json({list});
            })
            existingUser.list.push(list);
            existingUser.save();
        }
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {addTask};