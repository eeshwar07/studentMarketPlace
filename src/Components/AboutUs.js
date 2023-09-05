import React from 'react';
import Carts from '../assets/images/cart.jpg';


export default function AboutUs() {
  return (
    <>
    <div style={{backgroundColor:'green', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif'"}}>
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
                <a href="cart.html"><img className="cart" src={Carts} alt="Cart" width="20px" height="20px"/></a>
            </div>

            <div style={{marginRight:'10px'}}>
                <a href="login.html" onClick={() => localStorage.removeItem("user")}>Logout</a>
            </div>
        </div>
    </div>
    </div>
    <div>
            <center><h1>ABOUT US</h1>
            <p>Student Marketplace is software platform for online payments. Departments can set up an online store to sell merchandise, event tickets and take donations. The ready-made system allows departments to create a customized, user friendly and PCI Compliant web store.
                It can be accessed by all the Students, Faculty and all the Staff. We Offer many Services including, but not limited to Student Employment, Join Organizations or Clubs, workshops, Job Fairs, Student Pubications and Leadership Programs. We are Located at the University of Texas at Arlington,
                Arlington, Texas, 76010.
                </p></center>
            </div>
    </>
  )
}
