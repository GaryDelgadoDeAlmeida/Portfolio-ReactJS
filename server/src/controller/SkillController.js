const Skill = require("../model/Skill")

class SkillController {

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static getSkills(req, res) {
        const type = req.params.type

        (new Skill()).getSkillsByType(type, (response, err) => {
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
    static postSkill(req, res) {
        const {
            type,
            skill
        } = req.body

        (new Skill()).postSkill(type, skill, (response, err) => {
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
    static removeSkill(req, res) {
        const skillID = req.params.skillID

        (new Skill()).removeSkill(skillID, (response, err) => {
            if(err) {
                res.status(500).send(response)
            } else {
                res.send(response)
            }
        })
    }
}

module.exports = SkillController