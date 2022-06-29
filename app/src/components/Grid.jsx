import React from "react";
import data from "../data"
import Card from "./Card";

const Grid = (_props) => {
  return (
    <section className="grid-section">
      <div className="grid-menu">
        <h2>Filtros</h2>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          Pronta entrega:
          <input type="checkbox" />
        </label>
        <label htmlFor="">
          <input type="range" />
        </label>
        <label htmlFor="">
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        </label>
      </div>
      <div className="card-grid">
        {data.map((p) => (
          <Card name={p.name} quantity={p.quantity} thumbnail={p.imagens.thumbnail} preco={p.preco} category={p.category} />
        ))}
      </div>
    </section>
  )
}

export default Grid;