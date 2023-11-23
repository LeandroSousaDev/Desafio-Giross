const knex = require('../database/conection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const senhaSegura = 'umaSenhaSegura'

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

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await knex('users').where({ email }).first();

        if (!user) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        const validPassword = await bcrypt.compare(password, user.user_password);

        if (!validPassword) {
            res.status(400).json({ mensagem: "Senha inválida" });
        }

        const token = jwt.sign({ id: user.id }, senhaSegura, { expiresIn: '8h' });

        const { user_password, ...userLogged } = user;

        return res.status(200).json({ ...userLogged, token });

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

module.exports = { regiterUser, loginUser, senhaSegura };