import React from "react";
import { Link } from "react-router-dom"

const Banner = (_props) => {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-text">
          <h2>NOVA COLEÇÃO</h2>
          <h1>F O L H A S</h1>
          <Link to="/catalogo"><button>Quero conhecer a nova coleção!</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Banner;