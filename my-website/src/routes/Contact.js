import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';


const Contact = () => {
  return (
    <div>
      <NavBar/>
     <HeroImg2 heading="Let's Connect." text='You can contact from below'/>
      <Footer/>
    </div>
  )
}

export default Contact;