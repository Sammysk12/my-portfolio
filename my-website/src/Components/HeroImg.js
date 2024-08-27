import './HeroImg.css';
import React from 'react';
import IntroImg from '../Assets/Intro-Img.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
  
    <div className='hero'>
        
        <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='Image'/>
        </div>
        
        <div className='content'> 
        <p>Hi, I'm a developer.</p>
        <h1>Full-Stack Developer</h1>
        

        <div>
            <Link to='/project'className='btn'>Porjects</Link>
            <Link to='/contact'className='btn btn-light'>Contact</Link>
        </div>
        </div>
        
    </div>
  
  )
}

export default HeroImg; 