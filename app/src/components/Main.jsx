import React from "react";
import '../style/Main.css'
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";

const Main = (_props) => {
  return (
    <main>
      <Banner />
      <About />
      <Contact />
    </main>
  )
}

export default Main;