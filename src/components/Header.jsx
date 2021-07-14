import React from 'react';
import logoName from '../assets/images/logoN.png';
import logotipo from '../assets/images/logotype.png';

import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header-container active">
      <div className="logo">
        <div>
          <img src={logoName} alt="logoname" />
          <img className="logoTipo" src={logotipo} alt="logotipo" />
        </div>
        <p>Desenvolvimento Web FullStack</p>
      </div>
      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">Sobre mim</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </header>
  )
}
