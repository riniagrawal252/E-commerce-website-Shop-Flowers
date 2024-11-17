import React from 'react'
import  { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import  BreadCrumb  from '../Components/BreadCrumbs/BreadCrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import  DescriptionBox  from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product =all_product.find((e)=>e.id===Number(productId));
   
  return (
    <div>
      <BreadCrumb product={product}/>
      <ProductDisplay product ={product}/>
      <DescriptionBox/>
      <RelatedProducts/>

    </div>
  )
}
export default Product;
