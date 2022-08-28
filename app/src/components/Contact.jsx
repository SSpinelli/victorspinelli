import React from "react";

const Contact = (_props) => {
  return (
    <section className="contact-section">
      <div className="contact-container" id="contato">
        <h1>Contato</h1>
        <p>Entre em contato comigo, vamos conversar sobre a sua nova peça!</p>
        <form action="">
          <input type="text" placeholder="Escreva seu nome..."/>
          <input type="email" placeholder="Escreva seu melhor e-mail..." />
          <input type="text" placeholder="Escreva o seu número..." />
          <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder="Do que você quer falar sobre..."></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;