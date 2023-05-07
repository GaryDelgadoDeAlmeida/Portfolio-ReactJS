const express = require('express');
const cors = require('cors');

// Controller
const PortfolioController = require("./controller/PortfolioController");
const InboxController = require('./controller/InboxController');
const WitnessController = require('./controller/WitnessController');
const SkillController = require('./controller/SkillController');
const UserController = require('./controller/UserController');

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
app.get("/api/portfolio", (req, res) => PortfolioController.getAllFolios(req, res));

// Route to get one folio
app.get("/api/portfolio/:portfolioID", (req, res) => PortfolioController.getSingleFolio(req, res));

// Route for creating the folio
app.post('/api/portfolio', (req, res) => PortfolioController.postSingleFolio(req, res))

// Route to update a folio
app.put('/api/portfolio/:id', (req, res) => PortfolioController.updateSingleFolio(req, res));

// Route to delete a folio
app.delete('/api/portfolio/:id', (req, res) => PortfolioController.removeSingleFolio(req, res));


/* ---------------------------------------------------- *\
    User
\* ---------------------------------------------------- */

// Route to get data of the user
app.get("/api/user", (req, res) => UserController.getUser(req, res));

// Route to update data of the user
app.put("/api/user/:id", (req, res) => UserController.updateUser(req, res));


/* ---------------------------------------------------- *\
    Skills
\* ---------------------------------------------------- */
app.get("/api/skill", (req, res) => SkillController.getSkills(req, res))

app.post("/api/skill", (req, res) => SkillController.postSkill(req, res))

app.delete("/api/skill/:id", (req, res) => SkillController.removeSkill(req, res))


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


/* ---------------------------------------------------- *\
    Witnesses
\* ---------------------------------------------------- */
app.get("/api/witnesses", (req, res) => WitnessController.getAllWitnesses(req, res))

app.post("/api/witnesses", (req, res) => WitnessController.postWitness(req, res))

app.delete("/api/witnesses", (req, res) => WitnessController.deleteWitness(req, res))


/* ---------------------------------------------------- *\
    Services
\* ---------------------------------------------------- */
app.get("/api/services", (req, res) => {})

app.post("/api/services", (req, res) => {})

app.put("/api/services/:id", (req, res) => {})


/* ---------------------------------------------------- *\
    Inbox
\* ---------------------------------------------------- */
app.get("/api/inbox", (req, res) => InboxController.getAllInbox(req, res))

app.post("/api/inbox", (req, res) => InboxController.postInbox(req, res))

app.get("/api/inbox/:id", (req, res) => InboxController.getSingleInbox(req, res))

app.put("/api/inbox/:id", (req, res) => InboxController.updateInbox(req, res))

app.delete("/api/inbox/:id", (req, res) => InboxController.removeInbox(req, res))

module.exports = app