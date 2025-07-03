// src/pages/Confirmacao/Confirmacao.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { CustomButton } from '../../components/CustomButton/CustomButton';
import styles from './Confirmacao.module.css';

function Confirmacao() {
  const [pedido, setPedido] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  console.log('Rota atual:', location.pathname);


  // Recupera os dados do pedido finalizado
  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('pedidoFinalizado'));
    setPedido(dados);
  }, []);

  return (
    <div className={styles.confirmacaoContainer}>
      <h2>✅ Pedido realizado com sucesso!</h2>

      {pedido ? (
        <>
          <p>
            Obrigado pela sua compra, <strong>{pedido.nome}</strong>!
          </p>
          <p>
            Seu pedido será entregue em: <strong>{pedido.endereco}</strong>
          </p>
          <p>
            Total do pedido: <strong>R$ {pedido.total.toFixed(2)}</strong>
          </p>

          <div className={styles.listaItens}>
            <h5>Itens do Pedido:</h5>
            <ul>
              {pedido.itens.map(item => (
                <li key={item.id}>
                  {item.title} — {item.quantidade}x R$ {item.price.toFixed(2)} ={' '}
                  <strong>R$ {(item.price * item.quantidade).toFixed(2)}</strong>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Carregando dados do pedido...</p>
      )}

      <h4>Escolha a forma de pagamento:</h4>

      <div className={styles.secaoPagamento}>
        {/* PIX */}
        <div className={styles.pagamento}>
          <p><strong>Pix</strong></p>
          <img
            src="/img/confirmacao-pagamento.png"
            alt="Simulação de pagamento via Pix ou Boleto"
            className={styles.imgPix}
          />
        </div>

        {/* Boleto */}
        <div className={styles.pagamento}>
          <p><strong>Boleto</strong></p>
          <div className={styles.boleto}>
            34191.79001 01043.510047 91020.150008 6 87510000010000
          </div>
        </div>
      </div>

      <div className={styles.voltarLoja}>
        <CustomButton variant="primary" onClick={() => navigate('/')}>
          Voltar à loja
        </CustomButton>
      </div>
    </div>
  );
}

export default Confirmacao;
