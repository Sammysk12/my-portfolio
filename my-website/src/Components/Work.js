import { NavLink } from "react-router-dom";
import "./ProjectDetailsStyles.css";
import pr1 from "../Assets/Project-1.png"
import ProjectData from "./WorkData";
import ProjectsDetails from "./ProjectsDetails";

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {ProjectData.map((val, ind) =>{
            <ProjectsDetails key={ind}
                             imgsrc={val.imgsrc}
                             title={val.title}
                             text={val.text}
                             source={val.source}
            />
           })}
        </div>
    
    </div>
  )
}

export default Work;