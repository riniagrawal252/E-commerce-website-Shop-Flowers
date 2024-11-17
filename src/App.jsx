
import React from 'react'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import flowers_banner from './Components/assets/premium.png'
import cake_banner from './Components/assets/cake.jpg'
import jewel_banner from './Components/assets/blooms.png'
import Login from './Login';



 const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/flowers' element={<ShopCategory banner={flowers_banner} category="flowers"/>}/>
      <Route path='/cake' element={<ShopCategory banner={cake_banner} category="cake"/>}/>
      <Route path='/plants' element={<ShopCategory banner={jewel_banner} category="plants"/>}/>
      
       <Route path="/product" element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
       </Route>
       
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<LoginSignUp/>}/>
       <Route path='/loginpage' element ={<Login/>}/> 
       
           
       
    </Routes>
<Footer/>
    </BrowserRouter>
  

    
    </>
  )
}
export default App;
