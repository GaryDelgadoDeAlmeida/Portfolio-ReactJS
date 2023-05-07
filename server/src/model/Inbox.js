const database = require('./../config/database');

class Inbox {

    constructor(
        senderFullName,
        senderEmail,
        emailSubject,
        emailContent
    ) {
        this.senderFullName = senderFullName
        this.senderEmail = senderEmail
        this.emailSubject = emailSubject
        this.emailContent = emailContent
        this.isRead = false
        this.createdAt = new Date()
    }
    
    /**
     * Get all inboxs (mails)
     * @param {*} offset 
     * @param {*} limit 
     * @param {*} result 
     */
    getInboxs(offset, limit, result) {
        database.query("SELECT * FROM inbox ORDER BY id DESC LIMIT ?, ?", [(offset - 1) * limit, limit], (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }

    /**
     * Add a inbox row
     * @param {*} result 
     */
    postInbox(result) {
        database.query("INSERT INTO TABLE inbox (sender_full_name, sender_email, email_subject, email_content, is_read, created_at) VALUES (?, ?, ?, ?, ?, ?)", [...this], (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result({id: res.insertId, ...this})
        })
    }

    /**
     * Find a inbox (mail)
     * @param {*} inboxID 
     * @param {*} result 
     */
    getInbox(inboxID, result) {
        database.query("SELECT * FROM inbox WHERE id = ? LIMIT 1", inboxID, (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }

    /**
     * 
     * @param {*} inboxID 
     * @param {*} fields 
     * @param {*} result 
     */
    updateInbox(inboxID, fields, result) {
        database.query("UPDATE TABLE inbox SET ? WHERE id = ?", [...fields, inboxID], (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }

    /**
     * 
     * @param {*} inboxID 
     * @param {*} result 
     */
    removeInbox(inboxID, result) {
        database.query("DELETE FROM inbox WHERE id = ?", inboxID, (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }
}

module.exports = Inbox