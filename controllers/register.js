const User = require('../models/user');
const bcrypt = require('bcryptjs');

const register = async (req,res) =>{
   try{
    const {email, username, password} = req.body;
    const hashPassword = bcrypt.hashSync(password);
    const user = new User({email,username,password : hashPassword});

    await user.save().then(()=>{
        return res.status(200).json({
            success : true,
            message : "user created succesfully",
            data : user,
        })
    })
   }
   catch(error){
    console.log(error);
    return res.status(200).json({
        success : false,
        message : "user exist"
    })
   }
}
module.exports = {register};