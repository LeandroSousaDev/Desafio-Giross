import "./Style.css"
import Input from "../../components/Input/Input"
import Botao from "../../components/Botao/Botao"
import api from '../../service/instancia'
import { useState } from "react"
import axios from "axios"

export default function Principal() {

    const [cep, setCep] = useState('')
    const [errorUsuario, setErrorUsuario] = useState('')

    const [cepBuscado, setCepBuscado] = useState({})

    function imput(e) {
        setCep(e.target.value)
    }

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.get(`http://viacep.com.br/ws/01001000/json/`,
                {
                    headers: {
                        Authorization: `${token}`
                    }
                })
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
                    <div className="endereco">

                    </div>
                    <div className="cep-proximo">

                    </div>

                </div>
            </div>
        </div>

    )
}