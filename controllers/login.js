const User = require('../models/user');
const bcrypt = require('bcryptjs');

const login = async (req,res) =>{
    try{
        const user = await User.findOne({email : req.body.email});
        if(!user){
            res.status(200).json({
                message : "please register first"
            })
        }

        const isPassword = bcrypt.compareSync(req.body.password,user.password);
        if(!isPassword){
            res.status(200).json({
                message : "password is not correct"
            })
        }
        // now it means user exists and also its password is also correct
        const {password, ...others} = user._doc;
        res.status(200).json({others})

    }
    catch(error){
        message : "something went wrong"
    }
}

module.exports = {login}