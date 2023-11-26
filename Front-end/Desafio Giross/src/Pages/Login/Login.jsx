import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Botao from '../../components/Botao/Botao';
import Imput from '../../components/Input/Input';
import api from '../../service/instancia';
import "./Style.css"


export default function Login() {
    const navigate = useNavigate()
    const [errorUsuario, setErrorUsuario] = useState('')
    const [form, setForm] = useState({
        email: '',
        senha: ''
    })

    function input(e) {
        const chave = e.target.name;
        const valor = e.target.value;
        setForm({ ...form, [chave]: valor })
    }

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await api.post('/login', form);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('usuario', response.data.usuario.nome);
            navigate("/principal");
        } catch (error) {
            setErrorUsuario(error.response.data.mensagem)
        }
    }

    return (
        <div className='background'>



            <div className='login-tela'>

                <div className='login-texto-botao'>

                    <h1>
                        OI
                    </h1>
                    <p>
                        OI
                    </p>
                    <Link to={'/cadastro'}>
                        <Botao children='Cadastre-se' />
                    </Link>
                </div>

                < div className='login-formulario'>

                    <h1 className='login-formulario-titulo'>Login</h1>

                    <form onSubmit={submit}>
                        <Imput
                            etiqueta='email'
                            type='text'
                            name='email'
                            value={form.email}
                            onChange={input}
                        />

                        <Imput
                            etiqueta='senha'
                            type='password'
                            name='senha'
                            value={form.senha}
                            onChange={input}
                        />

                        <p className='erro' >{errorUsuario}</p>

                        <Botao children='Entrar' />
                    </form>
                </div >
            </div>


        </div >
    )
}