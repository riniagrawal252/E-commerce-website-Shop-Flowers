import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/download (11).jpg';
import cart from '../assets/mycart.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shops");
    const [userName, setUserName] = useState();  // State to hold the user's name
    const { getTotalCartItems } = useContext(ShopContext);
    const navigate = useNavigate();
 
    useEffect(() => {
        // Fetch the user's name from localStorage if logged in
        const storedData = JSON.parse(localStorage.getItem("user"));
if (storedData) {
    setUserName(storedData.userid);
}
    }, []);
    

    const handleLogout = () => {
        // Clear user data from localStorage
        // Clear user data from localStorage and update state
        localStorage.removeItem('userid');
        localStorage.removeItem('token');  // If you're using a token for authentication
        setUserName("");  // Clear the username in state
        navigate('/login');  
        
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
                <p>Shopper</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("flowers") }}>
                    <Link style={{ textDecoration: 'none' }} to='flowers'>Flowers</Link>
                    {menu === "flowers" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("cake") }}>
                    <Link style={{ textDecoration: 'none' }} to='cake'>Cake</Link>
                    {menu === "cake" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("plants") }}>
                    <Link style={{ textDecoration: 'none' }} to='plants'>Plants</Link>
                    {menu === "plants" ? <hr /> : <></>}
                </li>
            </ul>

            <div className='nav-login-cart'>
                {/* Conditional rendering for user login */}
                {userName ? (
                    <div className="nav-user-info">
                        {/* Display welcome message */}
                        <div style={{ marginRight: "20px", color: "green" }}>
                            Welcome, {userName}!
                        </div>
                        
                        {/* Logout Button */}
                        <button 
                            onClick={handleLogout}
                            style={{
                                backgroundColor: "#FF5733",
                                color: "#fff",
                                border: "none",
                                padding: "5px 10px",
                                cursor: "pointer",
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to='/login'><button>Login</button></Link>
                )}
                
                <Link to='/cart'>
                    <img src={cart} alt="Cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
