import "./Style.css"
import Input from "../../components/Input/Input"
import Botao from "../../components/Botao/Botao"
import api from '../../service/instancia'
import { useState } from "react"

export default function Principal() {

    const [cep, setCep] = useState('')
    const [errorUsuario, setErrorUsuario] = useState('')
    const [cepBuscado, setCepBuscado] = useState({})

    function imput(e) {
        setCep(e.target.value)
    }

    function buscado(busca) {
        const endereco = busca
        setCepBuscado(endereco)
    }

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await api.get(`/${imput}/json/`,
                {
                    headers: {
                        Authorization: `${token}`
                    }
                }
            )
            buscado(response.data)
        } catch (error) {
            setErrorUsuario(error.message)
        }
    }

    return (

        <div className='background'>
            <div className="principal">
                < div className='formulario'>

                    <h1 className='login-formulario-titulo'>Busca Cep</h1>

                    <form onSubmit={submit}>

                        <Input
                            etiqueta='Cep'
                            type='text'
                            name='email'
                            value={cep}
                            onChange={imput}
                        />

                        <p className='erro' >{errorUsuario}</p>

                        <Botao children='Busca' />
                    </form>
                </div >

                <div className="resultados">

                    <div className="cep-proximo">
                        <h1>Ceps proximos</h1>
                        <p></p>
                    </div>

                </div>
            </div>
        </div>

    )
}