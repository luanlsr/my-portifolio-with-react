import React, {useEffect} from 'react';
import '../styles/About.css'
import Aos from "aos";
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="about-container" id="about-me">
      <div className="about-content">
        <h1 data-aos="slide-right" data-aos-offset="50" data-aos-easing="ease-in-out-sine" data-aos-duration="2000">Sobre mim</h1>
        <div className="aboutme">
          <p>Estudo Desenvolvimento de Software na Trybe e curso Análise e Desenvolvimento de Sistemas na FAM. Amo aprender e desenvolver cada vez mais minhas skills. 
            Fui militar da Marinha do Brasil por 9 anos, onde aprendi a ser um homem disciplinado e organizado. Hoje estou dando continuidade a uma velha paixão: Tecnologia.
            Sempre gostei da área de exatas e fui uma criança muito curiosa. Sou autodidata em muitas coisas. 
          </p>
        </div>
      </div>
    </div>
  )
}
