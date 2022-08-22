const Models = require('../models/UserModel')

const UserController = {
    registerUser: Models.registerUser,
    loginUser: Models.loginUser,
    logoutUser: Models.logoutUser
}

module.exports = UserController