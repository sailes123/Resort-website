import React from 'react'
import Button from '../button/button';
import Contact from '../contact/contact';
import Reviews from '../reviews/reviews';
import TwoGriding from '../two-griding/two-griding';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
        <div className='background-img'>
             <div className='welcome-text'>
              <h3>Welcome To</h3>
              <h1>WildLife Resort</h1>
            </div>
        </div>
        <div className='small-description'>
               <h1>WildLife Resort</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut justo a mauris convallis porttitor. Praesent ante lectus, fringilla ut eros vitae, cursus vestibulum mauris. Praesent efficitur urna justo, quis varius metus eleifend sit amet. Sed vehicula egestas nulla ac rhoncus. Vestibulum ultricies dolor ac laoreet scelerisque. Proin ut odio sapien. Suspendisse vehicula suscipit purus, sit amet ornare nulla fermentum eget. Nam et dictum mauris. Vivamus sagittis lorem est, eget ultricies.</p>
               <Button/>
        </div>
        <TwoGriding/>
        <Reviews/>
    </div>
  )
}

export default Home;