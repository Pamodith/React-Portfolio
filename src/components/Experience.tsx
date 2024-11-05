import React from "react";
import "../assets/styles/sass/experience/_experience.scss";
import { dividerClasses } from "@mui/material";
import {ExperienceProp } from "../types/interface";


const experiences:ExperienceProp[] = [
  {
    titleName: "Fatbeehive - London",
    year: "2024-Present",
    jobTitle: ["Front-end Developer"],
    description: `
      Specializes in JavaScript and SCSS, primarily focusing on bug fixing and enhancements in web
applications developed using React.js, particularly in the context of the DIVI framework. Adept at
leveraging SASS for clean, maintainable styling and resolving issues to improve application performance
and user experience.

    `,
    languages: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    titleName: "Alphabetical IT - Houston Tx(Remote)",
    year: "2022-2024",
    jobTitle: ["Front-end Developer", "Trainee Front-end Developer"],
    description: `
      Proficient in developing dynamic web applications utilizing React.js, Redux, and JavaScript. Experienced
in creating user-friendly interfaces with Material-UI (MUI) and styling components using SCSS. Committed
to delivering high-quality, maintainable code and enhancing user experience through responsive design
and efficient state management
    `,
    languages: ["JavaScript", "HTML", "CSS", "React", "SCSS"],
  },
];

const Experience = () => {
  return (
    <>
      {experiences.map((item, index) => (
        <div className="experience-outer" key={index}>
          <div className="experience-inner">
            <div className="experience-inner-title">
              <div className="experience-inner-title-titlename">
                {item.titleName}
              </div>
              <div className="experience-inner-title-year">{item.year}</div>
            </div>

            <div className="experience-inner-jobtitle">
              {item.jobTitle.map((title, i) => (
                <div
                  style={{
                    margin: "3px 0",
                    background: "silver",
                    width: "fit-content",
                    padding: "6px",
                    borderRadius: "10px",
                  }}
                  key={i}
                >
                  {title}
                </div>
              ))}
            </div>
            <div className="experience-inner-description">
              {item.description}
            </div>
            <div className="experience-inner-languages">
              {item.languages.map((lan, key) => (
                <div
                  style={{
                    margin: "3px 0",
                    background: "silver",
                    width: "fit-content",
                    padding: "6px",
                    borderRadius: "10px",
                  }}
                  key={key}
                >
                  {lan}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
