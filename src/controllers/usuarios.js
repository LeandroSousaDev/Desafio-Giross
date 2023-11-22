const knex = require('../database/conection')
const bcrypt = require('bcrypt')

const regiterUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        checkEmail = await knex('users').where({ email }).first();

        if (checkEmail) {
            return res.status(400).json({ mensagem: "E-mail já cadastrado" })
        };

        const passwordBcrypt = await bcrypt.hash(password, 10);

        const newUser = {
            user_name: name,
            email,
            user_password: passwordBcrypt
        }

        const user = await knex('users').insert(newUser).returning("*");

        const { user_password, ...dataUser } = user[0];

        return res.status(201).json(dataUser);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }

}



module.exports = regiterUser