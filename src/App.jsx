import './App.css'
import Rodape from './componentes/Rodape';
import NovoUsuario from './componentes/usuarios/Usuario';
import Usuario from './componentes/usuarios/Usuario';
import Login from './componentes/usuarios/Login';
import Usuarios from './componentes/usuarios/Usuarios';
import Itens from './componentes/itens/Itens';
import Item from './componentes/itens/Item';

function App() {

  return (
    <>
      <section className="container-fluid">
        <h1 className='text-center mb-3 mt-3'>Restaurante</h1>
        {/* <Login /> */}
        <Usuario />
        <Usuarios />
        {/* <Item /> */}
        {/* <Itens /> */}
      </section>
      <Rodape />
    </>
  )
}

export default App