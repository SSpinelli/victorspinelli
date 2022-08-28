import React, { useContext } from "react";
import Header from "../components/Header"
import Footer from '../components/Footer'
import MyContext from "../context";
import ProductDetails from "../components/ProductDetails";

const Product = () => {
  const context = useContext(MyContext);
  return (
    <>
      <Header />
      <ProductDetails />
      <Footer />
    </>
  )
}

export default Product;