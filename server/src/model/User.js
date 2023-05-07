const database = require("../config/database")

class User {

    /**
     * 
     * @param {*} userID
     * @param {*} result 
     */
    getUser(userID = 1, result) {
        database.query("SELECT * FROM user WHERE id = ? LIMIT 1", userID, (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }

    /**
     * 
     * @param {*} userID 
     * @param {*} fields 
     * @param {*} result 
     */
    updateUser(userID = 1, fields, result) {
        database.query("UPDATE FROM user SET ? WHERE id = ?", [...fields, userID], (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result({id: userID, ...fields})
        })
    }
}

module.exports = User