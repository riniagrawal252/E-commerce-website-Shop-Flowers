import React from 'react'
import './Offer.css'
import exclusive_image from '../assets/COMBOS.JPG'
 const Offer = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Only on Best Seller Products</p>
            <button>Check Now</button>
            
        </div>
        <div className='offers-right'>
        <img src={exclusive_image}/>
        </div>
       
    </div>
  )

}
export default Offer;

