const Portfolio = require('../model/Portfolio');

class PortfolioController {
    
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static getAllFolios = (req, res) => {
        let { offset } = req.params;
        offset = offset > 1 ? offset : 1
        const limit = 15
        
        const portfolio = new Portfolio()
        portfolio.getPortfolios(offset, limit, (data, err) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.send(data)
            }
        })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static getSingleFolio = (req, res) => {
        const portfolioID = req.params.portfolioID;
    
        // If the portfolio Id isn't a number
        if(isNaN(portfolioID) || (!isNaN(portfolioID) && portfolioID <= 0)) {
            res.status(404).send("L'identifiant du projet n'est pas reconnu")
            return
        }
    
        const portfolio = new Portfolio()
        portfolio.getPortfolio(portfolioID, (data, err) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.send(data)
            }
        })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static postSingleFolio = (req, res) => {
        const [
            name, 
            img_path, 
            github_link,
            type,
            version,
            created_at
        ] = req.body;
    
        const portfolio = new Portfolio(name, img_path, github_link, type, version, created_at)
        portfolio.addPortfolio((data, err) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.send(data)
            }
        })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static updateSingleFolio = (req, res) => {
        const portfolioID = req.params.id;
        const [
            name,
            github_link,
            type,
            version
        ] = req.body
    
        const portfolio = new Portfolio()
        portfolio.updatePortfolio(portfolioID, (response, err) => {
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
    static removeSingleFolio = (req, res) => {
        const portfolioID = req.params.id;
    
        const portfolio = new Portfolio()
        portfolio.removePortfolio(portfolioID, (response, err) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.send(response)
            }
        })
    }
}

module.exports = PortfolioController