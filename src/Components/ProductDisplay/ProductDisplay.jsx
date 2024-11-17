import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star-icon.png'
import star_dull_icon from '../assets/dull.png'
import { ShopContext } from '../../Context/ShopContext'
export const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
         <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>122</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">${product.old_price}</div>
            
            <div className="productdisplay-right-prices-new">${product.new_price}</div>
</div>
<div className="productdisplay-right-description">
Surprise your loved one with this delightful arrangement including premium yellow Asiatic lilies symbolising gratitude and joy, peach roses expressing appreciation and sincerity, white daisies representing innocence and purity and yellow roses for friendship and happiness. Lovingly arranged in a glass vase, this bouquet bursts with vibrant colours and heartfelt symbolism, making it a perfect gift to brighten their day and convey your deepest emotions.
</div>
<div className='display-button'>
 <div className="pink"><button onClick={()=>{addToCart(product.id)}}>Add to cart</button></div>

<div className="yellow"><button>Buy Now</button></div>
</div> 

    </div>
    </div>
  )
}
export default ProductDisplay;
