import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
   const [fix,setFix] = useState(false);

   function setFixed(){
    if (window.scrollY >= 1){
      setFix(true)
    }else{
      setFix(false)
    }
   }

   window.addEventListener("scroll",setFixed);

  return (
    <div className={fix?'navigation fixed':'navigation'}>
      <div className='logo'>
        <img src='/logo.jpeg'></img>
      </div>
      <div className='navbar-items'>
        <Link to='/' className='link-style'><p>Home</p> </Link>
        <Link to='/about' className='link-style'><p>About</p></Link>
        <Link to='' className='link-style'><p>Accommondations</p></Link>
        <Link to='/information' className='link-style'><p>Informations</p></Link>
        <Link to='Gallery' className='link-style'><p>Gallery</p></Link>
        <Link to='/contact' className='link-style'>
        <p>Contact</p>
        </Link>
        
        <button className='book-btn'>Book Now</button>
      </div>
    </div>
  )
}

export default Navigation