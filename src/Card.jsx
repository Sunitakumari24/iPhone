import React from 'react'
import './Card.css';

 function Card() {
  return (
    <div className='card-section'>
        <div className='card'>
            <div className='image-card'>
            <img src='/image/image Titanium.jpeg' alt='Titanum'/>
            </div>
            <h2>Titanium design</h2>
            <p>Aerospace-grade titanium for an incredi</p>
        </div>
        <div className='card'>
            <div className='image-card'>
             <img src='/image/images.jpeg' alt='chip'/>
             </div>
            <h2>A17 Pro chip</h2>
            <p>Next-level GPU for immersive gaming and pro workflow</p>
        </div>
        <div className='card'>
            <div className='image-card'>
             <img src='/image/camera.jpeg' alt='system'/>
             </div>
 <h2>Pro camera system</h2>
 <p>7 pro lerses in your pocket. Capture incredible detail.</p>
        </div>

    </div>
  )
}
export default Card;