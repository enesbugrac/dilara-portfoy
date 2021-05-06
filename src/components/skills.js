import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"

const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-container">
          <h1>Beceriler</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <Fade bottom>
                <div className="skill" key={index}>
                  <img src={skill.img} alt="css"></img>
                  <p>{skill.para}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
