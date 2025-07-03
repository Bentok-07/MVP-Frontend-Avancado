// src/pages/FinalizarCompra/FinalizarCompra.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomButton } from '../../components/CustomButton/CustomButton';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import styles from './FinalizarCompra.module.css';

function FinalizarCompra() {
  const [itens, setItens] = useState([]);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const navigate = useNavigate();

  // Carrega os itens do carrinho e redireciona se estiver vazio
  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('carrinho')) || [];
    if (dados.length === 0) {
      alert("Seu carrinho está vazio.");
      navigate('/');
    } else {
      setItens(dados);
    }
  }, [navigate]);

  const total = itens.reduce((soma, item) => soma + item.price * item.quantidade, 0);

  // Valida e confirma o pedido
  function confirmarPedido() {
    if (!nome || !endereco) {
      alert("Por favor, preencha seu nome e endereço.");
      return;
    }

    const pedidoConfirmado = {
      nome,
      endereco,
      itens,
      total,
    };

    localStorage.setItem('pedidoFinalizado', JSON.stringify(pedidoConfirmado));
    localStorage.removeItem('carrinho');
    setItens([]);
    navigate('/confirmacao');
  }

  return (
    <div className={styles.finalizarContainer}>
      <Breadcrumb
        trilha={[
          { label: 'Início', link: '/' },
          { label: 'Carrinho', link: '/carrinho' },
          { label: 'Finalizar Pedido' },
        ]}
      />

      <h2>Finalização da Compra</h2>

      <div className={styles.subContainerFinalizar}>
        {/* Coluna com os itens listados */}
        <div className={styles.colunaItens}>
          <h4>Itens do Pedido:</h4>
          <ul>
            {itens.map(item => (
              <li key={item.id}>
                {item.title} — {item.quantidade}x R$ {item.price.toFixed(2)} = <strong>R$ {(item.price * item.quantidade).toFixed(2)}</strong>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna com o formulário e resumo do pedido */}
        <div className={styles.colunaFormulario}>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <label>Endereço:</label>
          <textarea
            value={endereco}
            onChange={e => setEndereco(e.target.value)}
            rows={3}
          />

          <div className={styles.resumoCompra}>
            <p><strong>Total de itens:</strong> {itens.reduce((t, i) => t + i.quantidade, 0)}</p>
            <p><strong>Valor total:</strong> R$ {total.toFixed(2)}</p>
            <CustomButton variant="success" onClick={confirmarPedido}>
              Confirmar Pedido
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalizarCompra;
