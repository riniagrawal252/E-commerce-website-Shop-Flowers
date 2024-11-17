import React from 'react'
import flowers from '../assets/Flowers.jpg';
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>“Love is the flower you've got 
                to let grow.”</h2>
            <div>
            <p>gifts</p>
            <p>for couples</p>
                
                
            </div>
            <div className="hero-latest-btn">
               
            Order Now
            </div>
            </div>
            <div className='hero-right'>
            <img src={flowers} alt="" />
            </div>

    </div>
  )
}
export default Hero;