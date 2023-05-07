const database = require('./../config/database');

class Portfolio {

    constructor(name, img_path, github_link, type, version) {
        this.name = name
        this.img_path = img_path
        this.github_link = github_link
        this.type = type
        this.version = version
        this.created_at = new Date()
    }

    /**
     * Find all projects
     * 
     * @param {*} offset 
     * @param {*} limit 
     * @param {*} result 
     */
    getPortfolios(offset, limit, result) {
        database.query("SELECT * FROM project ORDER BY id DESC LIMIT ?, ?", [(offset - 1) * limit, limit], (err, res) => {
            if(err) {
                result(null, err)
                return
            }
            
            result(res, null)
        });
    }

    /**
     * Find a single project by Id
     * 
     * @param {*} portfolioID 
     * @param {*} result 
     */
    getPortfolio(portfolioID, result) {
        database.query("SELECT * FROM project WHERE id = ? LIMIT 1", portfolioID, (err, res) => {
            if(err) {
                result(null, err)
                return
            }
            
            result(res[0], null)
        })
    }

    /**
     * Insert a new project
     * 
     * @param {*} result 
     */
    addPortfolio(result) {
        database.query("INSERT INTO project (name, img_path, github_link, type, version, created_at) VALUES (?, ?, ?, ?, ?, ?)", [this.name, this.img_path, this.github_link, this.type, this.version, this.created_at], (err, res) => {
            if(err) {
                result(null, err)
                return
            }
            
            result({id: res.id, ...this}, null)
        });
    }

    /**
     * 
     * @param {*} portfolioID 
     * @param {*} result 
     */
    updatePortfolio(portfolioID, fields, result) {
        database.query("UPDATE project SET name = ?, github_link = ?, type = ?, version = ? WHERE id = ?", [fields.name, fields.github_link, fields.type, fields.version, portfolioID], (err, res) => {
            if(err) {
                result(null, err)
                return
            }
            
            result(res, null)
        });
    }

    /**
     * 
     * @param {*} portfolioID 
     * @param {*} result 
     */
    removePortfolio(portfolioID, result) {
        database.query("DELETE FROM project WHERE id = ?", portfolioID, (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res, null)
        })
    }
}

module.exports = Portfolio