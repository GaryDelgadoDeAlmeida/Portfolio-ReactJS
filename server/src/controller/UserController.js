const User = require("../model/User")

class UserController {
    
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static getUser(req, res) {
        (new User()).getUser(null, (response, err) => {
            if(err) {
                res.status(500).send(response)
            } else {
                res.send(response)
            }
        })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static updateUser(req, res) {
        const fields = req.body

        (new User()).updateUser(null, fields, (response, err) => {
            if(err) {
                res.status(500).send(response)
            } else {
                res.send(response)
            }
        })
    }
}

module.exports = UserController