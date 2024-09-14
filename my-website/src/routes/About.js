import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';
// import Form from '../Components/Form';

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="About Me." text="I'm a enthusiastic full-stack developer"/>
      <AboutContent/>
      <Footer/>
    </div>
    
  )
}

export default About;