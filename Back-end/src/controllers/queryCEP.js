const knex = require('../database/conection')
const instancia = require('../instancias')
const data = require('../tools/funcionTime')

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

        const newSearch = {
            user_name: req.user.user_name,
            date: data(),
            cep: cep,
            neighborhood: endereco.bairro,
            id_user: req.user.id
        }

        await knex('historic').insert(newSearch).returning("*");

        return res.json(cepProximo)

    } catch (error) {
        return res.json(error.message)
    }

}

module.exports = { queryCEP, }