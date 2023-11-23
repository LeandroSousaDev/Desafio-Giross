const instancia = require('../instancias')

const queryCEP = async (req, res) => {
    const { cep } = req.params

    try {
        const resposta = await instancia.get(`${cep}/json/`)

        const endereco = resposta.data

        if (endereco.erro == true) {
            return res.json('cep não exixti')
        }


        let cepProximo = []

        let resposta2 = await instancia.get(`${endereco.uf}/${endereco.localidade}/${endereco.bairro}/json/`)

        for (const x of resposta2.data) {
            cepProximo.push(x.cep)
        }

        res.json(cepProximo)

    } catch (error) {
        return res.json(error.message)
    }

}

module.exports = { queryCEP, }