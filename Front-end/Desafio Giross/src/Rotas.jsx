import {
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Login from './Pages/Login/Login.jsx'
import Cadastro from './Pages/Cadastro/cadastro.jsx'
import Principal from './Pages/Principal/Principal.jsx'
import Historico from './Pages/Historico/historico.jsx'

function RotasPrivadas({ redirectTo }) {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

function Rotas() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />



        <Route path='/principal/' element={<Principal />} />
        <Route path='/historico/' element={<Historico />} />
        <Route element={<RotasPrivadas redirectTo={'/'} />}>
        </Route>
      </Routes>
    </>

  )
}

export default Rotas
