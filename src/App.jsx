import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import queryString from 'query-string';
import { useState, useEffect } from 'react';

// Barra de navegação e rodapé
import BarraDeNavegacao from '@componentes/finais/BarraDeNavegacao';
import Rodape from '@componentes/finais/Rodape';

// Páginas do sistema
import Comandas from '@paginas/comandas/Comandas';
import Itens from '@paginas/itens/Itens';
import Logs from '@paginas/Logs';
import Usuarios from '@paginas/usuarios/Usuarios';
import Login from '@paginas/usuarios/Login';

// Páginas de registro
import Comanda from '@paginas/comandas/Comanda';
import Item from '@paginas/itens/Item';
import Usuario from '@paginas/usuarios/Usuario';
import ItemComanda from '@paginas/itemcomandas/ItemComanda';

// Utilitários
import { resetarURL, definirURL } from '@componentes/utilitarios/Funcoes';

import './App.css';

function App() {

  return (
    <Router>
      <BarraDeNavegacao />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Comandas />} />
          <Route path="/itens" element={<Itens />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/login" element={<Login />} />
          <Route path='comandas/registro' element={<Comanda />} />
          <Route path='itens/registro' element={<Item />} />
          <Route path='usuarios/registro' element={<Usuario />} />
          <Route path='itemcomandas/registro' element={<ItemComanda />} />
        </Routes>
      </div>

      <Rodape />
    </Router>
  );
}

export default App;
