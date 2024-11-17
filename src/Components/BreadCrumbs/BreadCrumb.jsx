
import './BreadCrumb.css'
import React from 'react'
import arrow_icon from '../assets/angle.png'

export const BreadCrumb = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        Home<img src={arrow_icon} alt=""/>Shop<img src={arrow_icon}/>{product.category}<img src={arrow_icon}/>{product.name}
    </div>
  )
}
export default BreadCrumb;
