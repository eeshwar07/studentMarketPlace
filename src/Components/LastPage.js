import React from 'react';
import '../css/tp.css';
import Cart from '../assets/images/cart.jpg';


export default function LastPage() {
  return (
    <>
         <div style={{backgroundColor:'green',color: 'white', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>
      <div  style={{display: 'flex'}}>
          <div>
          <h2 style={{marginLeft:'20px'}}>
              <a href="home.html" style={{fontSize: '100%', color:'white'}}>STUDENT<br></br>MARKETPLACE</a></h2>
          </div>
  
          <div className='menu'>
              <div style={{marginRight:'10px'}}>
              <a href="home.html">Home</a>
              </div>
  
              <div style={{marginRight:'10px'}}>
                  <a href="aboutus.html">About Us</a>
              </div>
  
              <div style={{marginRight:'10px'}}>
                  <a href="contactus.html">Contact Us</a>
              </div>
  
              <div style={{marginRight:'10px'}}>
                  <a href="services.html">Services</a>
              </div>

              <div style={{marginRight:'10px'}}>
                <a href="cart.html"><img className="cart" src={Cart} alt="Cart" width="20px" height="20px"/></a>
              </div>

              <div style={{marginRight:'10px'}}>
                <a href="login.html" onClick={() => localStorage.removeItem("user")}>Logout</a>
              </div>
          </div>
      </div>
      </div>

            <div style={{marginTop:'220px'}}>
            <center><h1>Thank You for using Student Marketplace!</h1>
            </center>
            </div>
    </>
  )
}
