// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Componentes from '../pages/Componentes/Componentes';
import Detalhes from '../pages/Detalhes/Detalhes';
import Carrinho from '../pages/Carrinho/Carrinho';
import Busca from '../pages/Busca/Busca';
import FinalizarCompra from '../pages/FinalizarCompra/FinalizrCompra';
import Confirmacao from '../pages/Confirmacao/Confirmacao';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/componentes/:categoria" element={<Componentes />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/busca" element={<Busca />} />
      <Route path="/finalizar" element={<FinalizarCompra />} />
      <Route path="/confirmacao" element={<Confirmacao />} />

      {/* Rota para páginas inexistentes */}
      <Route
        path="*"
        element={
          <div style={{ paddingTop: '80px', textAlign: 'center' }}>
            <h2>Página não encontrada</h2>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
