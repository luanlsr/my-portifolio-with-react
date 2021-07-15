import React, {useState} from 'react';
import logoName from '../assets/images/logoN.png';
import logotipo from '../assets/images/logotype.png';
import {FaBars} from 'react-icons/fa'
import '../styles/Header.css';

export default function Header() {
const [showHeader, setShowHeader] = useState(false);

const changeBackground = () => {
  if(window.scrollY >= 80) {
    setShowHeader(true)
  } else {
    setShowHeader(false)
  }
}

const menuTogle = () => {
  const nav = document.getElementById('menu-overlay');
  nav.classList.toggle('active')
}

// useEffect(() => {
//   changeBackground()
// }, [])

window.addEventListener('scroll' ,changeBackground)

  return (
    <header className={showHeader ? 'header-container active' : 'header-container'}>
      <div className="logo-container">
        <div className="logo">
          <img className="logoName" src={logoName} alt="logoname" />
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
      <FaBars id="toggleIcon" onClick={menuTogle}/>
      <div id="menu-overlay">
        <ul>
          <li><a onClick={menuTogle} href="#home">Home</a></li>
          <li><a onClick={menuTogle} href="#about-me">Sobre mim</a></li>
          <li><a onClick={menuTogle} href="#skills">Skills</a></li>
          <li><a onClick={menuTogle} href="#projects">Projetos</a></li>
          <li><a onClick={menuTogle} href="#contact">Contato</a></li>
        </ul>
      </div>
    </header>
  )
}
