import React from 'react'
import Client from './client';
import './reviews.css';

const Reviews = () => {
  return (
    <div className='reviews'>
          <h1>What our Guest Says</h1>
          <div className='client'>
            <Client/>
            <Client/>
            <Client/>
          </div>
    </div>
  )
}

export default Reviews;