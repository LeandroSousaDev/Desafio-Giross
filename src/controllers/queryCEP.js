const instancia = require('../instancias')

const queryCEP = async (req, res) => {

    try {
        const resposta = await instancia.get('41640490/json/')

        const cep = resposta.data

        if (cep.erro == true) {
            return res.json('cep não exixti')
        }

        let cepProximo = []

        let resposta2 = await instancia.get(`${cep.uf}/${cep.localidade}/${cep.bairro}/json/`)

        for (const x of resposta2.data) {
            cepProximo.push(x.cep)
        }

        res.json(cepProximo)

    } catch (error) {
        return res.json(error.message)
    }

}

module.exports = { queryCEP, }