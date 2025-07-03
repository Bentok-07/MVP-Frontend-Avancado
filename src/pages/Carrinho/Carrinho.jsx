// src/pages/Carrinho/Carrinho.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardComponente } from '../../components/CardComponente/CardComponente';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import ModalConfirmacao from '../../components/ModalConfirmacao/ModalConfirmacao';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import styles from './Carrinho.module.css';

function Carrinho() {
  const [itens, setItens] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [idParaExcluir, setIdParaExcluir] = useState(null);
  const navigate = useNavigate();

  // Carrega itens salvos no localStorage ao iniciar a página
  useEffect(() => {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
    setItens(carrinhoAtual);
  }, []);

  // Ações de remoção com confirmação
  function solicitarRemocao(id) {
    setIdParaExcluir(id);
    setMostrarModal(true);
  }

  function confirmarRemocao() {
    const novaLista = itens.filter(item => item.id !== idParaExcluir);
    setItens(novaLista);
    localStorage.setItem('carrinho', JSON.stringify(novaLista));
    setMostrarModal(false);
    setIdParaExcluir(null);
  }

  function cancelarRemocao() {
    setMostrarModal(false);
    setIdParaExcluir(null);
  }

  // Ajusta quantidade de itens no carrinho
  function ajustarQuantidade(id, delta) {
    const atualizado = itens.map(item => {
      if (item.id === id) {
        const novaQtd = item.quantidade + delta;
        return { ...item, quantidade: novaQtd > 1 ? novaQtd : 1 };
      }
      return item;
    });

    setItens(atualizado);
    localStorage.setItem('carrinho', JSON.stringify(atualizado));
  }

  // Cálculo do subtotal
  const subtotal = itens.reduce((acc, item) => acc + item.price * item.quantidade, 0);

  return (
    <div className={styles.containerCarrinho}>
      <div className={styles.topoFixo}>
        <Breadcrumb trilha={[{ label: 'Início', link: '/' }, { label: 'Carrinho' }]} />
        <h2>Carrinho de Compras</h2>
      </div>

      <div className={styles.listaItens}>
        {itens.map(item => (
          <CardComponente
            key={item.id}
            contexto="carrinho"
            title={item.title}
            image={item.thumbnail}
            brand={item.brand}
            price={item.price}
            quantidade={item.quantidade}
            onVerDetalhes={() => navigate(`/detalhes/${item.id}`)}
            onAdicionar={() => solicitarRemocao(item.id)}
            onDiminuir={() => ajustarQuantidade(item.id, -1)}
            onAumentar={() => ajustarQuantidade(item.id, 1)}
          />
        ))}
      </div>

      {itens.length > 0 && (
        <div className={styles.finalizacaoFixa}>
          <div className={styles.resumoCarrinho}>
            <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
            <p><strong>Total: R$ {subtotal.toFixed(2)}</strong></p>
          </div>
          <div className={styles.botaoFinalizar}>
            <CustomButton variant="primary" onClick={() => navigate('/finalizar')}>
              Finalizar Compra
            </CustomButton>
          </div>
        </div>
      )}

      {mostrarModal && (
        <ModalConfirmacao
          titulo="Remover do Carrinho"
          mensagem="Tem certeza que deseja remover este item do carrinho?"
          onConfirmar={confirmarRemocao}
          onCancelar={cancelarRemocao}
        />
      )}
    </div>
  );
}

export default Carrinho;
