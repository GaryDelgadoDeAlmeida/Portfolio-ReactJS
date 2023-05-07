const Witness = require("../model/Witness")

class WitnessController {
    
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static getAllWitnesses(req, res) {
        // 
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static postWitness(req, res) {
        // 
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static getWitness(req, res) {
        // 
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static updateWitness(req, res) {
        // 
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static deleteWitness(req, res) {
        const witnessID = req.params.id

        (new Witness()).removeWitness(witnessID, (response, err) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.send(response)
            }
        })
    }
}

module.exports = WitnessController