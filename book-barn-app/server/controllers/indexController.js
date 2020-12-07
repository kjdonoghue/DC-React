const models = require('../models')
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
require('dotenv').config()

class IndexController {

    registerUser = (req, res) => {
        let username = req.body.username
        let password = req.body.password
       
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                let user = models.User.build({
                    username: username,
                    password: hash
                })
                user.save().then((savedUser) => {
                    res.json({success: true})
                })
    
            });
        });
    
    }

    loginUser = (req, res) => {
        let username = req.body.username
        let password = req.body.password

        models.User.findOne({where: {username: username} })
        .then((foundUser) => {
            if (foundUser === null) {
                console.log("user not found")
                res.json({success: false})
            } else {
                bcrypt.compare(password, foundUser.password, function(err,request) {
                    if (request) {
                        const token = jwt.sign({username: username}, process.env.JWT_CODE)
                        res.json({token: token})
                        // res.json({success: true})
                    } else {
                        console.log("password found")
                        res.json({success: false})
                    }     
                })
            }
        })
    

        //original code before JWT
        // models.User.findOne({where: {username: username} })
        // .then((foundUser) => {
        //     if (foundUser === null) {
        //         res.json({success: false})
        //     } else {
        //         bcrypt.compare(password, foundUser.password, function(err,request) {
        //             if (request) {
        //                 res.json({success: true})
        //             } else {
        //                 res.json({success: false})
        //             }     
        //         })
        //     }
        // })
    }

}


module.exports = IndexController