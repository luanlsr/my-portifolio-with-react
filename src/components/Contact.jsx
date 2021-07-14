import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('portifolioEmail', 'template_dd1evh9', e.target, 'user_bbU9FFrioyGXwuHivDxRe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

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
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Nome</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Assunto</label>
          <input type="text" name="subject" />
          <label>Messagem</label>
          <textarea name="message" />
          <input type="submit" value="Enviar" />
        </form>
      </section>
    </div>
  )
}
