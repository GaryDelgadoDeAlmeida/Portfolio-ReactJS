const database = require("../config/database")

class Witness {
    
    /**
     * Get all witness
     * 
     * @param {*} offset 
     * @param {*} limit 
     * @param {*} result 
     */
    getWitnesses(offset, limit, result) {
        database.query("SELECT * FROM witness ORDER BY id DESC LIMIT ?, ?", [(offset - 1) * limit, limit], (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }

    /**
     * Find a witness by id
     * 
     * @param {*} witnessID 
     * @param {*} result 
     */
    getWitness(witnessID, result) {
        database.query("SELECT * FROM witness WHERE id = ? LIMIT 1", witnessID, (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }

    /**
     * Update a single witness
     * 
     * @param {*} witnessID 
     * @param {*} fields 
     * @param {*} result 
     */
    updateWitness(witnessID, fields, result) {
        database.query("UPDATE TABLE witness SET comment = ? WHERE id = ?", [{...fields}, witnessID], (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }

    /**
     * 
     * @param {*} witnessID 
     * @param {*} result 
     */
    removeWitness(witnessID, result) {
        database.query("DELETE FROM witness WHERE id = ?", witnessID, (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }
}

module.exports = Witness