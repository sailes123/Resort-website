import React from 'react'
import Button from '../button/button';
import './two-griding.css';

const TwoGriding = () => {
  return (
    <div className='two-griding'>
        <div className='griding1'>
            <h1>Rooms</h1>
            <Button/>
        </div>
        <div className='griding2'>
            <h1>Activities</h1>
            <Button/>
        </div>
    </div>
  )
}

export default TwoGriding;