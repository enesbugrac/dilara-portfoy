import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from "../images/logo.png"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <img
            src={logo}
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
          />
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Projeler</button>
            <button onClick={() => scrollTo("#skills")}>Projeler</button>

            <button onClick={() => scrollTo("#about")}>Hakkımda</button>
            <button onClick={() => scrollTo("#contact")}>İletişim</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
