import React from 'react';
import './Navbar.css';
import logo from '../Assets/R.png';

const Navbar = () => {
  return (
<header>
    <div className='navbar'>

        <div className='top-toggle'>
            <div className='top-left-para'>
                <p>Brand Waali Quality, Bazaar Waali Deal!</p>
            </div>
            <div className="top-right-para">
                <p>Impact@Snapdeal</p>
                <p>Gift Card</p>
                <p>Help Center</p>
                <p>Sell On Snapdeal</p>
                <p><span className="material-symbols-outlined">phone_iphone</span>Download App</p>
            </div>
        </div>

        <div className="bottom-toggle">
            <img src={logo} alt="" />
            <i className="fa-solid fa-bars fa-lg"></i>
            <input type="text" placeholder='Search products & brands' />
            <p className='search'><i className="fa-solid fa-magnifying-glass fa-sm"></i>Search</p>
            <p className='cart'>Cart<i className="fa-solid fa-cart-shopping"></i></p>
            <div className="sign-hover">
                <div className="sign">
                    <p>Sign In<i className="fa-solid fa-user"></i></p>
                </div>
                <div className="sign-box" >
                    <div className="details">
                        <p>Your Account</p>
                        <p>Your Orders</p>
                        <p>Shortlist</p>
                    </div>
                    <div className="login">
                        <p className='new-user'>if you are a new user</p>
                        <p className='reg'>Register</p>
                        <button>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</header>
  )
}

export default Navbar
