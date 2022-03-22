
const userSchema = require('../model/userSchema')
module.exports=async (req,res,next)=>{
    try {
        const user= await userSchema.findOne({email_address:req.body.email_address})
        if(!user){
           return res.send({
                success:false,
                message:"user not found"
            })    
        }

        const isPassWordMatch = await userSchema.comparePassword(req.body.password)
        if(!isPassWordMatch){
            return res.send({
                success:false,
                message:"invalid email_address or password"
            })
        }
        res.send({
            success:true,
            data:user
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message || "Something went wrong"
        })
    }
}