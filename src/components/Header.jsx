import React, {useState} from 'react';
import logoName from '../assets/images/logoN.png';
import logotipo from '../assets/images/logotype.png';
// import {AiOutlineClose} from 'react-icons/ai'
// import {FaBars} from 'react-icons/fa'
import '../styles/Header.scss';
import Burger from './Burger';

export default function Header() {
const [showHeader, setShowHeader] = useState(false);

const changeBackground = () => {
  if(window.scrollY >= 80) {
    setShowHeader(true)
  } else {
    setShowHeader(false)
  }
}

// const menuToggle = () => {
//   const nav = document.getElementById('menu-overlay');
//   nav.classList.toggle('active')
//   // console.log(nav.classList.value)
// }

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
      <Burger />
      {/* <FaBars className="toggleIcon" onClick={menuTogle}/> */}

      {/* <div id="menu-overlay">
        <ul>
          <li><a onClick={menuToggle} href="#home">Home</a></li>
          <li><a onClick={menuToggle} href="#about-me">Sobre mim</a></li>
          <li><a onClick={menuToggle} href="#skills">Skills</a></li>
          <li><a onClick={menuToggle} href="#projects">Projetos</a></li>
          <li><a onClick={menuToggle} href="#contact">Contato</a></li>
        </ul>
      </div> */}
    </header>
  )
}
