import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    const { resumeExperience, resumeBasicInfo } = this.props;

    if (!resumeExperience || !resumeBasicInfo) {
      return <div>Loading...</div>; // Prevent crash if props are missing
    }

    const sectionName = resumeBasicInfo.section_name.experience;

    const work = resumeExperience.map((work, i) => {
      const mainTech = work.mainTech.map((tech, index) => (
        <Badge pill className="main-badge mr-2 mb-2" key={index}>
          {tech}
        </Badge>
      ));

      const tech = work.technologies.map((tech, index) => (
        <Badge pill className="experience-badge mr-2 mb-2" key={index}>
          {tech}
        </Badge>
      ));

      // 🎨 Assign Icons Based on Experience Type
      let iconClass;
      if (work.title.includes("Volunteer")) {
        iconClass = "fas fa-hands-helping"; // Volunteer Icon
      } else if (work.title.includes("Blood Donor")) {
        iconClass = "fas fa-hand-holding-heart"; // Blood Donor Icon
      } else {
        iconClass = "fab fa-react"; // Default Work Icon
      }

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{ background: "#AE944F", color: "#fff", textAlign: "center" }}
          icon={<i className={`${iconClass} experience-icon`}></i>}
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>{mainTech}</div>
          <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
            {work.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
            {work.company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{ background: "#AE944F", color: "#fff", textAlign: "center" }}
              icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
