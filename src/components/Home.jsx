import React from 'react';
import background from '../assets/images/background.jpg'
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home" id="home">
      <img className="img" src={background} alt="background" />
    </div>
  )
}
