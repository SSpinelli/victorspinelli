import React from "react";
import '../style/Header.css'

const Header = (_props) => {
  return (
    <header>
      <div className="header-container">
        <h1><span>V</span>.Spine||i</h1>
        <nav>
          <ul>
            <li>Sobre</li>
            <li>Fenearte</li>
            <li>Catálogo</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;