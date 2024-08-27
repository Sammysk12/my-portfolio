import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={40} style={{color:"white", marginRight:"2rem"}}/>
            <div>
              <p>T-4, Damani Complex, Datta Chowk, Solapur-413007,</p>
              <p>India.</p>
            </div>
            </div>

            <div className="phone">
              <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>+91 8149530270</h4>
            </div>

            <div className="email">
              <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>samarthkalshetti43@gmail.com</h4>
            </div>              
        </div>


        
         <div className="right">
                  <h4>About Me</h4>
                  <p>Hi, This is me Samarth Kalshetti.</p>
        
                <div className="social">
                 <FaInstagram size={30} style={{color:"white", marginRight:"1rem"}}/>
                 <FaYoutube size={30} style={{color:"white", marginRight:"1rem"}}/>
                 <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>
                </div>
          </div>
      </div>

    </div>
  )
};

export default Footer;