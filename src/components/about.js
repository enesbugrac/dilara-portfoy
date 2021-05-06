import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import profile from "../images/profile.jpg"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>Hakkımda</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>

          <div className="image-wrapper">
            <img style={{ zIndex: 999 }} src={profile} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
