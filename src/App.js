import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.scss';

function App() {


  return (
    <div className="App">
      <Header />
      <div className="sections"> 
        <Home />
        <a href="#about-me">
          <div className="scroll-down"></div>
        </a>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
