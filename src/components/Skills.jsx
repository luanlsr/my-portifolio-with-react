import React from 'react';
import '../styles/Skills.css';

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-content">
        <h1>Skills</h1>
        <div className="list-skills">
          <ul className="frontend-skills">
            <h2>FRONT-END</h2>
            <li><h3>HTML5</h3><span className="bar"><span className="html5"></span></span></li>
            <li><h3>CSS</h3><span className="bar"><span className="css" ></span></span></li>
            <li><h3>Javascript</h3><span className="bar"><span className="javascript" ></span></span></li>
            <li><h3>TypeScript</h3><span className="bar"><span className="typescript" ></span></span></li>
            <li><h3>React</h3><span className="bar"><span className="react" ></span></span></li>
            <li><h3>Redux</h3><span className="bar"><span className="redux" ></span></span></li>
            <li><h3>Sass</h3><span className="bar"><span className="sass" ></span></span></li>
            <li><h3>Bootstrap</h3><span className="bar"><span className="bootstrap" ></span></span></li>
            <li><h3>Materialize</h3><span className="bar"><span className="materialize" ></span></span></li>
          </ul>
          <ul className="backend-skills">
          <h2>BACK-END</h2>
            <li><h3>NodeJs</h3><span className="bar"><span className="nodejs" ></span></span></li>
            <li><h3>MySQL</h3><span className="bar"><span className="mysql" ></span></span></li>
            <li><h3>MongoDB</h3><span className="bar"><span className="mongodb" ></span></span></li>
            <li><h3>Express</h3><span className="bar"><span className="express" ></span></span></li>
            <li><h3>PM2</h3><span className="bar"><span className="pm2" ></span></span></li>
            <li><h3>Python</h3><span className="bar"><span className="python" ></span></span></li>
            <li><h3>PHP</h3><span className="bar"><span className="php" ></span></span></li>
            <li><h3>Laravel</h3><span className="bar"><span className="laravel" ></span></span></li>
          </ul>
          <ul className="other-skills">
          <h2>OTHER SKILLS</h2>
            <li><h3>Jest</h3><span className="bar"><span className="jest" ></span></span></li>
            <li><h3>Mocha Chai</h3><span className="bar"><span className="mochachai" /></span></li>
            <li><h3>Sinon</h3><span className="bar"><span className="sinon" ></span></span></li>
            <li><h3>Figma</h3><span className="bar"><span className="figma" ></span></span></li>
            <li><h3>Docker</h3><span className="bar"><span className="docker" ></span></span></li>
            <li><h3>Firebase</h3><span className="bar"><span className="firebase" ></span></span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
