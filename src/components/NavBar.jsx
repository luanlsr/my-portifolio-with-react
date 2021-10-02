import React from 'react'

export default function NavBar() {
  const menuToggle = () => {
    const nav = document.getElementById('menu-overlay');
    nav.classList.toggle('active')
    // console.log(nav.classList.value)
  }

  return (
    <div id="menu-overlay">
        <ul>
          <li><a onClick={menuToggle} href="#home">Home</a></li>
          <li><a onClick={menuToggle} href="#about-me">Sobre mim</a></li>
          <li><a onClick={menuToggle} href="#skills">Skills</a></li>
          <li><a onClick={menuToggle} href="#projects">Projetos</a></li>
          <li><a onClick={menuToggle} href="#contact">Contato</a></li>
        </ul>
      </div>
  )
}
