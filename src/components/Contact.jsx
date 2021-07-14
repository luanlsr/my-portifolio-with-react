import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <section className="contact-content">
        <header>
          <h1>Contato</h1>
        </header>
        <article className="social-networks">
          <a href="https://github.com/luanlsr" target="__blank"><FaGithub className="github"/></a>
          <a href="https://www.linkedin.com/in/luan-ramalholsr/" target="__blank"><FaLinkedin className="linkedin "/></a>
          <a href="https://www.instagram.com/luan_ramalholsr/" target="__blank"><GrInstagram className="instagram"/></a>
        </article>
      </section>
    </div>
  )
}
