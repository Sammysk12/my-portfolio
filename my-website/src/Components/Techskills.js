import "./TechSkillsStyles.css";
import { Link } from "react-router-dom";

import React from 'react'

const Techskills = () => {
  return (
    <div className="techskills">
        <div className='skills-container'>
            <div className="skill">
                <h3>- Programming Langs -</h3>
                <span className="bar"></span>
                <p className="btc">Proficiency : 4/5</p>
                <p>Years of Experience : 0 to 1 Yrs</p>
                <p>- C -</p>
                <p>- Core Java -</p>
                <p>- JavaScript -</p>
                <Link to="/contact" className="btn">View</Link>
            </div>

            <div className="skill">
                <h3>- Web Technologies -</h3>
                <span className="bar"></span>
                <p className="btc">Proficiency : 4.5/5</p>
                <p>Years of Experience : 0 to 1 Yrs</p>
                <p>- HTML, CSS -</p>
                <p>- JavaScript, jQuery -</p>
                <p>- Angular, React.js -</p>
                <Link to="/contact" className="btn">View</Link>
            </div>

            <div className="skill">
                <h3>- Database Technologies -</h3>
                <span className="bar"></span>
                <p className="btc">Proficiency : 4.4/5</p>
                <p>Years of Experience : 0 to 1 Yrs</p>
                <p>- Oracle-SQL -</p>
                <p>- MySQL-SQL -</p>
                <p>- MongoDB -</p>
                <Link to="/contact" className="btn">View</Link>
            </div>

            <div className="skill">
                <h3>- Frameworks -</h3>
                <span className="bar"></span>
                <p className="btc">Proficiency : 4.1/5</p>
                <p>Years of Experience : 0 to 1 Yrs</p>
                <p>- Hibernate -</p>
                <p>- Spring -</p>
                <p>- Spring Boot -</p>
                <Link to="/contact" className="btn">View</Link>
            </div>

            <div className="skill">
                <h3>- Other Technologies -</h3>
                <span className="bar"></span>
                <p className="btc">Proficiency : 4.2/5</p>
                <p>Years of Experience : 0 to 1 Yrs</p>
                <p>- Postman -</p>
                <p>- Agile, Scrum -</p>
                <p>- PowerBI -</p>
                <Link to="/contact" className="btn">View</Link>
            </div>

            <div className="skill">
                <h3>- Soft Skills -</h3>
                <span className="bar"></span>
                <p className="btc">Proficiency : 4.8/5</p>
                <p>- Leadership -</p>
                <p>- Critical Thinking -</p>
                <p>- Time Management -</p>
                <p>- Quick Learner -</p>
                <Link to="/contact" className="btn">View</Link>
            </div>
        </div>
    </div>
  )
}

export default Techskills