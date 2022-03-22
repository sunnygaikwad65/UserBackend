const userSchema = require("../model/userSchema");
const { use } = require("../routes");

module.exports = {
    getAll: async (req, res, next) => {
        try {
            console.log("IN GET ALL")
            const users = await userSchema.find().select('address companies email_address mobileNumber username');
            res.send({
                success: true,
                data: users
            })
        } catch (error) {
            res.send({
                success: false,
                message: error.message || "Something went wrong"
            })
        }
    },
    getById: async (req, res, next) => {
        try {
            const user = await userSchema.findById(req.params.id)
            res.send({
                success: true,
                data: user
            })
        } catch (error) {
            res.send({
                success: false,
                message: error.message || "Something went wrong"
            })
        }
    }
}