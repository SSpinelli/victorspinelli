import React, { useContext } from 'react'
import MyContext from '../context'

const ProductDetails = () => {
  const context = useContext(MyContext)
  return (
    <div>
      <h1>{context.product.name}</h1>
      <img src="" alt="" />
    </div>
  )
}

export default ProductDetails