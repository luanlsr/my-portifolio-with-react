import React from 'react';
import logoName from '../assets/images/logoN.png';
import logotipo from '../assets/images/logotype.png';

import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header-container">
      <span>
        <img src={logoName} alt="logoname" />
        <img className="logoTipo" src={logotipo} alt="logotipo" />
        </span>
      <ul className="menu">
        <li>Home</li>
        <li>Sobre mim</li>
        <li>Skills</li>
        <li>Serviços</li>
        <li>Contato</li>

      </ul>
    </header>
  )
}
