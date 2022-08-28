import React from "react";
import { Link } from "react-router-dom";
import '../style/Footer.css'

const Footer = (_props) => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <Link to="/">
            <h1><span>V</span>.Spine||i</h1>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;