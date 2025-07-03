import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import {
  FaHome,
  FaShoppingCart,
  FaMoneyBillWave,
  FaSmile,
  FaInfoCircle,
  FaBoxOpen,
  FaSearch,
  FaQuestionCircle,
} from 'react-icons/fa';

function obterRotuloPagina(path) {
  if (path === '/') return <><FaHome /></>;
  if (path.startsWith('/carrinho')) return <><FaShoppingCart /></>;
  if (path.startsWith('/finalizar')) return <><FaMoneyBillWave /></>;
  if (path.startsWith('/confirmacao')) return <><FaSmile /></>;
  if (path.startsWith('/detalhes')) return <><FaInfoCircle /></>;
  if (path.startsWith('/componentes')) return <><FaBoxOpen /></>;
  if (path.startsWith('/busca')) return <><FaSearch /></>;
  return <><FaQuestionCircle /> Página</>;
}

export default function Header() {
  const location = useLocation(); 

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Bellari</div>

      <nav>
        <ul className={styles.navList}>
          <div className={styles.indicadorRota}>
            {obterRotuloPagina(location.pathname)}
          </div>

          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.ativo}` : styles.navLink
              }
            >
              Início
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink
              to="/carrinho"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.ativo}` : styles.navLink
              }
            >
              Carrinho
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink
              to="/busca"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.ativo}` : styles.navLink
              }
            >
              Busca
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
