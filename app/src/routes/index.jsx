import React from "react";
import {Routes, Route} from "react-router-dom"
import Catalog from "../pages/Catalog";
import Home from "../pages/Home";

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/catalogo" element={ <Catalog /> } />
    </Routes>
  )
}

export default MyRoutes;