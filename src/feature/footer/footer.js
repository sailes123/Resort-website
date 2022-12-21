import React from 'react';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import './footer.css';

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='container'>
                <div className='sec about'>
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut justo a mauris convallis porttitor. Praesent ante lectus, fringilla ut eros vitae, cursus vestibulum mauris. Praesent efficitur urna justo, quis varius metus eleifend sit amet.
                    </p>
                    <ul className='social-media'>
                    <li><a href='#'><FacebookOutlined style={{color:"white", fontSize:"20px"}}/></a></li>
                    <li><a href='#'><InstagramOutlined style={{color:"white", fontSize:"20px"}}/></a></li>
                    <li><a href='#'><TwitterOutlined style={{color:"white", fontSize:"20px"}}/></a></li>
                    <li><a href='#'><YoutubeOutlined style={{color:"white", fontSize:"20px"}}/></a></li>
                </ul>
                </div>
                <div className='sec quickLinks'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Service</a></li>
                        <li><a href='#'>Room</a></li>
                        <li><a href='#'>Location</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className='sec contact-us'>
                      <h2>Contact Info</h2>
                      <ul className='info'>
                        <li>
                            <span></span>
                            <p><a>+977-9383489328392, 01-456778</a></p>
                        </li>
                        <li>
                            <span></span>
                            <span>123 NewRoad Street<br/> Kathmandu Metropolitian,<br/>Nepal</span>
                        </li>
                        <li>
                            <span></span>
                            <p><a>meroresort@gmail.com</a></p>
                        </li>
                      </ul>
                </div>
            </div>
        </div>
        <div className='copyrightText'>
              <p>CopyRight © 2022 WildLife Resort. All Right Reserved.</p>
        </div>
        </>
    )
}

export default Footer