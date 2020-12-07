const jwt = require('jsonwebtoken')
const models = require('./models')

function authenticate(req, res, next) {
    
    let headers = req.headers['authorization']
    
    if(headers) {
        const token = headers.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_CODE)
        console.log(decoded)
        if (decoded) {
            const username = decoded.username
            models.User.findOne({where: {username: username} })
            .then((persistedUser) => {
               if (persistedUser) {
                   next()
               } else {
                   res.json({error: "unauthorized access"})
               }
            })
        }
    } else {
        console.log("no headers")
    }
}

module.exports = authenticate