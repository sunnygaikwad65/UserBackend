const router = require('express').Router();
const addUser = require('../businessLogic/addUser')
const deleteUser = require('../businessLogic/deleteUser')
const { getAll, getById } = require("../businessLogic/getUsers")
const updateUser = require("../businessLogic/updateUser")

router.get('/users', getAll)
router.get('/users/:id', getById)
router.post('/users', addUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router;
