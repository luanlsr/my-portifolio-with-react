import React from 'react'
import '../styles/About.css'
import Skills from './Skills';
export default function About() {
  return (
    <div className="about-container" id="about-me">
      <div className="about-content">
        <h1>Sobre mim</h1>
        <h4>Eu sou Luan da SIlva Ramalho.</h4>
        <div className="aboutme">
          <p>Estudo Desenvolvimento de Software na Trybe e curso Análise e Desenvolvimento de Sistemas na FAM. Amo aprender e desenvolver cada vez mais minhas skills. 
            Fui militar da Marinha do Brasil por 9 anos, onde aprendi a ser um homem disciplinado e organizado.
          </p>
        </div>
      </div>
    </div>
  )
}
