import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import RJSIMG from "../Assets/ReactJS.jpg";
import RJS2IMG from "../Assets/ReactJS2.jpg";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm an Enthusiastic Full-Stack Developer, Who is proficient especially in the Front-End Development. A Quick learner and a good team player.</p>
        <Link to="/contact"><button className="btn">Contact</button></Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={RJSIMG} alt="Image" className="img"/>
            </div>
            <div className="img-stack bottom">
                <img src={RJS2IMG} alt="Image" className="img"/>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default AboutContent