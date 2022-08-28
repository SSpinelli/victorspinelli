import React from "react";
import { Link } from "react-router-dom";
import '../style/Header.css'

const Header = (_props) => {
  return (
    <header>
      <div className="header-container">
        <Link to="/"><h1><span>V</span>.Spine||i</h1></Link>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
            <Link to="/catalogo"><li>Ir para o Catálogo</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;