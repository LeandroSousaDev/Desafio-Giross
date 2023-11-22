const instancia = require('../instancias')

const queryCEP = async (req, res) => {

    try {
        const resposta = await instancia.get('40725064/json/')

        const cep = resposta.data.cep

        return res.json(cep)
    } catch (error) {
        return res.json(error.message)
    }

}

module.exports = queryCEP