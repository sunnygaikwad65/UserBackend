
const userSchema = require('../model/userSchema')
module.exports = async (req, res, next) => {
    try {

        await userSchema.updateOne({ _id: req.params.id, $set: { ...req.body } })
        res.send({
            success: true,
            message: "User updated succesfully"
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}