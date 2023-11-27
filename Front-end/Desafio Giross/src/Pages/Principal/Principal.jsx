import "./Style.css"
import Input from "../../components/Input/Input"
import Botao from "../../components/Botao/Botao"
import { useState } from "react"

export default function Principal() {

    const [cep, setCep] = useState('')
    const [errorUsuario, setErrorUsuario] = useState('')
    const [listaceps, setListaceps] = useState('')

    function imput(e) {
        setCep(e.target.value)
    }

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await api.get('/transacao/extrato', {
                headers: {
                    Authorization: `${token}`
                }
            })
            setListaceps(response.data);
        } catch (error) {
            setErrorUsuario(error.response.data.mensagem)
        }
    }

    return (
        < div className='login-formulario'>

            <h1 className='login-formulario-titulo'>Login</h1>

            <form onSubmit={submit}>

                <Input
                    etiqueta='email'
                    type='text'
                    name='email'
                    value={cep}
                    onChange={imput}
                />

                <p className='erro' >{errorUsuario}</p>

                <Botao children='Entrar' />
            </form>
        </div >
    )
}