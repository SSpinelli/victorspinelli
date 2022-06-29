import React from "react";

const Card = (props) => {
  const { name, quantity, preco, thumbnail, category } = props; 
  return (
    <section className="card-section">
      <div className="card-container">
        <span>{category}</span>
        <img src={thumbnail} alt={name} />
        <h3>{name}</h3>
        <div>
          <p>{preco}</p>
          <p>{quantity}</p>
        </div>
      </div>
    </section>
  )
}

export default Card;