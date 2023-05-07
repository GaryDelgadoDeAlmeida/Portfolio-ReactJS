const database = require("../config/database")

class Skill {

    /**
     * 
     * @param {*} type 
     * @param {*} result 
     */
    getSkillsByType(type, result) {
        database.query("SELECT * FROM skill WHERE type = ?", type, (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }

    /**
     * 
     * @param {*} type 
     * @param {*} skill 
     * @param {*} result 
     */
    postSkill(type, skill, result) {
        database.query("INSERT INTO FROM skill (type, skill, created_at) VALUES (?, ?, ?)", [type, skill, new Date()], (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result({id: res[0].insertId, type: type, skill: skill, created_at: new Date()})
        })
    }

    /**
     * 
     * @param {*} skillID 
     * @param {*} result 
     */
    removeSkill(skillID, result) {
        database.query("DELETE FROM skill WHERE id = ?", skillID, (err, res) => {
            if(err) {
                result(null, err)
                return
            }

            result(res)
        })
    }
}