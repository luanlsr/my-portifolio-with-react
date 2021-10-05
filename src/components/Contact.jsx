import React, { useState } from 'react';
import {FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Result = () => {
  return (
    <p>Sua mensagem foi enviada! Obrigado pelo contato.</p>
  )
}

export default function Contact() {
  const [sentEmail, setSendEmail] = useState(false)

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('portifolioEmail', 'template_dd1evh9', e.target, 'user_bbU9FFrioyGXwuHivDxRe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setSendEmail(true)
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
          <a href="https://wa.me/qr/25NMGTW7XOO5G1" target="__blank"><FaWhatsapp className="whatsapp"/></a>
        </article>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label className="label-name" >Nome</label>
          <input className="name" required type="text" name="user_name" />
          <label className="label-email" >Email</label>
          <input className="email" required type="email" name="user_email" />
          <label className="label-subject" >Assunto</label>
          <input className="subject" required type="text" name="subject" />
          <label className="label-message" >Messagem</label>
          <textarea className="message" required name="message" />
          <input className="submit" type="submit" value="Enviar" />
        </form>
        {sentEmail ? <Result /> : null}
      </section>
    </div>
  )
}
