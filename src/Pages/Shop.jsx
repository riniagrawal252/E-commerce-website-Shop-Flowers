import React from 'react'
import Hero from '../Components/Hero/Hero'
import Populer from '../Components/Popular/Populer';
import Offer from '../Components/Offers/Offer';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/Newsletter/NewsLetter';
const Shop = () => {
  return (
    <>
      <Hero/>
    
    <Populer/>
    <Offer/>
  <NewCollections/>
  <NewsLetter/>
    </>
  )
}
export default Shop;