const { response } = require("../app")
const Inbox = require("../model/Inbox")

class InboxController {

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static getAllInbox = (req, res) => {
        const limit = 20
        let { offset } = req.params
        offset = offset ? offset : 1

        const inbox = new Inbox()
        inbox.getInboxs(offset, limit, (response, err) => {
            if(err) {
                res.status(500).send(err)
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
    static postInbox = (req, res) => {
        // 
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static getSingleInbox = (req, res) => {
        const inboxID = req.params.id

        const inbox = new Inbox()
        inbox.getInbox(inboxID, (response, err) => {
            if(err) {
                res.status(500).send(err)
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
    static updateInbox = (req, res) => {
        // 
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static removeInbox = (req, res) => {
        const inboxID = req.params.id

        (new Inbox()).removeInbox(inboxID, (response, err) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.send(response)
            }
        })
    }
}

module.exports = InboxController