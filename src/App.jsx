import './App.css'
import Rodape from '@componentes/finais/Rodape';
import Usuario from '@paginas/usuarios/Usuario';
import Login from '@paginas/usuarios/Login';

import Comanda from './paginas/comandas/Comanda';
import Comandas from './paginas/comandas/Comandas';

import Item from '@paginas/itens/Item';

import ItemComanda from '@paginas/itemcomandas/ItemComanda';
import ItemComandas from '@paginas/itemcomandas/ItemComandas';

function App() {

  return (
    <>
      <section className="container-fluid">
        <h1 className='text-center mb-3 mt-3'>Restaurante</h1>
        {/* <Usuario /> */}
        <Login />
        {/* <Item /> */}
        <Comanda />
        <Comandas />
        {/* <ItemComanda id_comanda = '1' /> */}
        {/* <ItemComandas condicoes = {{id_comanda: 1}} /> */}
      </section>
      <Rodape />
    </>
  )
}

export default App