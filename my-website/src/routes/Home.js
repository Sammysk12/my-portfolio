import React from 'react'
import NavBar from '../Components/NavBar';
import HeroImg from '../Components/HeroImg';
import Footer from '../Components/Footer';
import Work from '../Components/Work'

const Home = () => {
  return (
    <div>
      <NavBar/>
        <HeroImg/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home;