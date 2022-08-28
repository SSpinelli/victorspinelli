import React, { useState } from "react";
import data from "../data"
import Card from "./Card";

const Grid = (_props) => {
  const [info, setInfo] = useState({
    filterName: '',
    filterQtd: false,
    filterPrice: '1500',
    filterCategory: 'Outros'
  })

  const [newData, setNewData] = useState(data);

  const handleChange = (event) => {
    const name = event.target.name;
    if (name === "filterQtd") {
      setInfo({...info, [name]: !info.filterQtd});
      return filterQtd(info.filterQtd)
    }
    setInfo({ ...info, [name]: event.target.value });
    otherFilters(event.target.value, name)
  }
  

  const filterName = (value) => {
    const filteredData = newData.filter((p) => p.name.toUpperCase().includes(value.toUpperCase()));
    setNewData(filteredData);
  }

  const filterPrice = (value) => {
    console.log(typeof value);
    const filteredData = newData.filter((p) => Number(p.preco) <= Number(value))
    setNewData(filteredData)
  }

  const filterCategory = (value) => {
    const filteredData = newData.filter((p) => p.category + 's' === value);
    setNewData(filteredData);
  }

  const filterQtd = (value) => {
    const temPeca = newData.filter((p) => p.quantity);

    value ? setNewData(data) : setNewData(temPeca);
  }

  const otherFilters = (value, name) => {
    if (name === "filterName") filterName(value)
    if (name === "filterPrice") filterPrice(value)
    if (name === "filterCategory") filterCategory(value)
  }

  const resetFilters = () => {
    setInfo({
      filterName: '',
      filterQtd: false,
      filterPrice: '1500',
    })
    setNewData(data);
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
            Até: <span>{`R$ ${info.filterPrice}`}</span>
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
          <select name="filterCategory" id="cars" onChange={handleChange}>
            <option value="Quadros">Quadros</option>
            <option value="Esculturas">Esculturas</option>
            <option value="Luminárias">Luminárias</option>
            <option value="Outros">Outros</option>
          </select>
          </label>
          <button onClick={resetFilters}>Ver Todos</button>
        </div>
        <div className="card-grid">
          {newData.map((p, index) => (
            <Card product={ {...p, id: index + 1  }} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Grid;