import React from 'react';
// import background from '../assets/images/background.jpg'
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home" id="home">
      {/* <img className="img" src={background} alt="background" /> */}
      <div className="meeting">
        <p>Olá, meu nome é</p>
        <h1>Luan da Silva Ramalho</h1>
      </div>
      <a href="#about">
        <div className="scroll-down"></div>
      </a>
    </div>
  )
}
