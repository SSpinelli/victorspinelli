import React from "react";
import {Routes, Route} from "react-router-dom"
import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import Product from "../pages/Product";

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/catalogo" element={ <Catalog /> } />
      <Route exact path="/catalogo/*" element={ <Product /> } />
    </Routes>
  )
}

export default MyRoutes;