import React, { useContext, useState } from "react";
import MyContext from "../context";
import { Navigate } from 'react-router-dom'

const Card = (props) => {
  const { product: { name, quantity, preco, imagens: { thumbnail }, category } } = props;
  const [goToPage, setGoToPage] = useState(false);
  const { setProduct } = useContext(MyContext);

  const handleClick = async () => {
    await setProduct({ ...props.product });
    setGoToPage(true);
  }

  return (
    <section className="card-section">
      <div className="card-container" onClick={ handleClick }>
        <span>{category}</span>
        <img src={thumbnail} alt={name} />
        <h3>{name}</h3>
        <div>
          <p>{preco}</p>
          <p>{quantity}</p>
        </div>
      </div>
      {goToPage && <Navigate to={`/catalogo/${props.product.id}`} />}
    </section>

  )
}

export default Card;