import React, { Component } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Badge from "react-bootstrap/Badge"
import Fade from "react-reveal/Fade"

class Experience extends Component {
  render() {
    if (this.props.resumeExperience) {
      const sectionName = "Deneyimler"
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies
        const mainTechnologies = work.mainTech
        console.log(mainTechnologies)
        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          )
        })
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          )
        })
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fab fa-angular experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        )
      })
    }

    return (
      <div className="section" id="resume">
        <section className="pt-5">
          <Fade bottom cascade>
            <h1 style={{ fontSize: "3rem", lineHeight: "20px" }}>Deneyim</h1>
          </Fade>
          <div className="col-md-8 mx-auto">
            <VerticalTimeline>
              {work}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#AE944F",
                  color: "#fff",
                  textAlign: "center",
                }}
                icon={
                  <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                }
              />
            </VerticalTimeline>
          </div>
        </section>
      </div>
    )
  }
}

export default Experience
