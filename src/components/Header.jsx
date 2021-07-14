import React, {useEffect, useState} from 'react';
import logoName from '../assets/images/logoN.png';
import logotipo from '../assets/images/logotype.png';

import '../styles/Header.css';

export default function Header() {
const [showHeader, setShowHeader] = useState(false);

const changeBackground = () => {
  console.log(window.scrollY);
  if(window.scrollY >= 80) {
    setShowHeader(true)
  } else {
    setShowHeader(false)
  }
}

// useEffect(() => {
//   changeBackground()
// }, [])

window.addEventListener('scroll' ,changeBackground)

  return (
    <header className={showHeader ? 'header-container active' : 'header-container'}>
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
