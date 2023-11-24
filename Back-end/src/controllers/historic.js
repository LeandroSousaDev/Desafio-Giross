const knex = require('../database/conection')

const historic = async (req, res) => {
    try {
        const historic = await knex('historic')

        return res.json(historic)
    } catch (error) {
        return res.json(error.message)
    }
}

module.exports = historic
