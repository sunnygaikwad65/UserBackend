
const userSchema = require('../model/userSchema');
module.exports=async (req,res,next)=>{
    try {
        const user= new userSchema({
            ...req.body
        })
        await user.save();
        res.send({
            success:true,
            message:"User created succesfully"
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message || "Something went wrong"
        })
    }
}