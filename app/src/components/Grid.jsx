import React, { useState } from "react";
import data from "../data"
import Card from "./Card";

const Grid = (_props) => {
  const [info, setInfo] = useState({
    filterName: '',
    filterQtd: false,
    filterPrice: 1500,
    filterCategory: 'todas'
  })

  const [newData, setNewData] = useState(data);

  const handleChange = (event) => {
    const name = event.target.name;
    if (name === "filterQtd") {
      setInfo({...info, [name]: !info.filterQtd});
      return filterByQtd(info.filterQtd)
    }
    setInfo({ ...info, [name]: event.target.value });
    filterByNameOrPrice(event.target.value, name)
  }

  const filterByNameOrPrice = (value, name) => {  
    if (name === 'filterName') {
      const filteredData = data.filter((p) => p.name.toUpperCase().includes(value.toUpperCase()));
      setNewData(filteredData);
    }
  }

  const filterByQtd = (value) => {
    const temPeca = data.filter((p) => p.quantity);

    value ? setNewData(data) : setNewData(temPeca);
  }

  return (
    <section className="grid-section">
      <div className="grid-container">
        <div className="grid-menu">
          <h2>Filtros</h2>
          <label htmlFor="">
            <input
             type="text"
             value={info.filterName}
             name="filterName"
             onChange={handleChange}
             placeholder="Nome da peça..."
            />
          </label>
          <label htmlFor="">
            Pronta entrega:
            <input 
              type="checkbox"
              checked={info.filterQtd}
              name="filterQtd"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Até: <span>{info.filterPrice}</span>
            <input 
              type="range"
              max={5000}
              value={info.filterPrice}
              min={1500}
              name="filterPrice"
              onChange={handleChange}
            />
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
          {newData.map((p) => (
            <Card name={p.name} quantity={p.quantity} thumbnail={p.imagens.thumbnail} preco={p.preco} category={p.category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Grid;