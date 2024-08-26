import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import Techskills from '../Components/Techskills';
import Work from '../Components/Work';


const Projects = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="Projects." text="Some of my Recent works"/>
      <Work/>
      <Techskills/>
      <Footer/>
    </div>
  )
}

export default Projects;