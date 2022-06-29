import React from "react";
import '../style/Main.css'
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Fenearte from "./Fenearte";

const Main = (_props) => {
  return (
    <main>
      <Banner />
      <Fenearte />
      <About />
      <Contact />
    </main>
  )
}

export default Main;