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
        <h1 data-aos="zoom-in-up" data-aos-offset="50" data-aos-easing="ease-in-out-sine" data-aos-duration="2000">Sobre mim</h1>
        <div className="aboutme">
          <p>Sou amante por adquirir conhecimento e tenho buscado nos estudos de desenvolvimento web uma forma de mudar o mundo, mesmo que de forma singela. Acredito que a tecnologia é um meio eficiente de transformação tanto socioeconômico quanto cultural da sociedade como um todo. Sou ex-militar da Marinha do Brasil onde servi por 9 anos onde adiquiri muito conehcimento em diversas áreas. Estou cursando o 3º semestre de Análise e Desenvolvimento de Sistemas pela FAM e estudando na Desenvolvimento Web Fullstack na TRYBE. Tenho como foco atuar nas áreas de desenvolvimento web fullstack e pretendo estudar mais conteúdos voltados a desenvolvimento mobile. Penso em Terminar minha faculdade e logo após continuar minha formação com certificações e pós-graduação na área de data-science. Possuo experiências em javascript e React como principal Framework. Tenho interesse em estudar Angular. Domino bem NodeJs com Express e consigo criar API com facilidade. Estou estudando PHP e Java para incrementar meu leque de stacks de backend.
Gostaria de acompanhar meu progresso? 
          </p>
        </div>
        <a href="https://www.linkedin.com/in/luan-ramalholsr/" target="__blank"><button className="linkedinButton">Linkedin</button></a>
      </div>
    </div>
  )
}
