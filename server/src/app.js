const express = require('express');
const database = require('./config/database');
const cors = require('cors');
const Portfolio = require('./model/Portfolio');

const app = express();

app.use(cors());
app.use(express.json())

// Config the header of the request to allow call when the site isn't on the same server name
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

// Check if the user is allowed to call this API
app.use((req, res, next) => {
    console.log("Authentification réussi !")
    next()
})


/* ---------------------------------------------------- *\
    Portfolio
\* ---------------------------------------------------- */

// Route to get all folios
app.get("/api/portfolio", (req, res) => {
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
});

// Route to get one folio
app.get("/api/portfolio/:portfolioID", (req, res) => {
    const portfolioID = req.params.portfolioID;

    const portfolio = new Portfolio()
    portfolio.getPortfolio(portfolioID, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
});

// Route for creating the folio
app.post('/api/portfolio', (req, res) => {
    const [
        name, 
        img_path, 
        github_link,
        type,
        version,
        created_at
    ] = req.body;

    database.query("INSERT INTO project (name, img_path, github_link, type, version, created_at) VALUES (?, ?, ?, ?, ?, ?)", [name, img_path, github_link, type, version, created_at], (err, result) => {
        if(err) {
            console.log(err)
        } 
        console.log(result)
    });
})

// Route to update a folio
app.put('/api/portfolio/:id', (req, res) => {
    const id = req.params.id;
    const [
        name,
        github_link,
        type,
        version
    ] = req.body

    database.query("UPDATE project SET name = ?, github_link = ?, type = ?, version = ? WHERE id = ?", [name, github_link, type, version, id], (err, result) => {
        if(err) {
            console.log(err)
        }
        
        console.log(result)
    });    
});

// Route to delete a folio
app.delete('/api/portfolio/:id', (req, res) => {
    const id = req.params.id;

    database.query("DELETE FROM project WHERE id= ?", id, (err, result) => {
        if(err) {
            console.log(err)
        }
    });
});


/* ---------------------------------------------------- *\
    User
\* ---------------------------------------------------- */

// Route to get data of the user
app.get("/api/user", (req, res) => {});

// Route to update data of the user
app.put("/api/user/:id", (req, res) => {});


/* ---------------------------------------------------- *\
    Experience
\* ---------------------------------------------------- */

// Route to get experience/formation
app.get("/api/experience", (req, res) => {});

// Route to create a new experience/formation
app.post("/api/experience", (req, res) => {});

// Route to update an experience/formation
app.put("/api/experience/:id", (req, res) => {});

// Route to delete an experience/formation
app.delete("/api/experience/:id", (req, res) => {});

module.exports = app