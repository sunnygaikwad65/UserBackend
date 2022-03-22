
const userSchema = require('../model/userSchema')
module.exports=async (req,res,next)=>{
    try {
        console.log("====",req.body)
        await userSchema.deleteOne({_id:req.params.id})
        res.send({
            success:true,
            message:"User deleted succesfully"
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message || "Something went wrong"
        })
    }
}