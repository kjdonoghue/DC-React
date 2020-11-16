const models = require('../models')
var bcrypt = require('bcryptjs');

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
                res.json({success: false})
            } else {
                bcrypt.compare(password, foundUser.password, function(err,request) {
                    if (request) {
                        res.json({success: true})
                    } else {
                        res.json({success: false})
                    }     
                })
            }
        })
    }

}


module.exports = IndexController