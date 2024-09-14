import "./ProjectDetailsStyles.css";
import React from 'react'
// import pro1 from "../Assets/Project-1.png";
import { NavLink } from "react-router-dom";
import ProjectsDetails from "./ProjectsDetails";
import ProjectData from "./WorkData";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
       {ProjectData.map((val, ind) =>{
        return(
          <ProjectsDetails 
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          text={val.text}
          view={val.view}
          source={val.source}/>
        )
       })}
      </div>
    
    </div>
  )
}

export default Work;