const jwt = require('jsonwebtoken')
const User = require('../entities/User')

const UserModel = {
    registerUser: async (req, res) => {
        try {
            let username = req.body.username;
            let password = req.body.password;
            let admin = req.body.admin;
            if (username && password) {
                const newUser = await new User({
                    username: username,
                    password: password,
                    admin: admin
                })
                const user = await newUser.save()
                return res.status(200).json(user)
            }
            return res.status(400).json('Bad Request')
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    generateToken: (user) => {
        return jwt.sign({
            username: user.username,
            admin: user.admin
        }, 'mk', { expiresIn: "1y" })
    },
    loginUser: async (req, res) => {
        try {
            let username = req.body.username;
            let password = req.body.password;
            if (username && password) {
                const user = await User.findOne({
                    username: username,
                })
                if (user.password === password) {
                    let token = UserModel.generateToken(user)
                    return res.status(200).json(token)
                }
                return res.status(400).json('Bad Request')
            }
            return res.status(400).json('Bad Request')
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    logoutUser: async (req, res) => {
        res.status(200).json("Logout success")
    }
}

module.exports = UserModel